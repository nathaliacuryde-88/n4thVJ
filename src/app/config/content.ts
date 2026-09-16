/**
 * The visuals whose content you supply: the words for Kinetic Type and the
 * file that Clip and Mosaic both read.
 *
 * Words go in localStorage, which is made for short strings. A video does not:
 * it is megabytes of binary, so it goes in IndexedDB as a Blob. Keeping it
 * stored at all is the difference between choosing your footage once and
 * re-uploading it every time the page opens, which is not something to be
 * doing before a set.
 */

const TEXT_KEY = 'vj-text';
const DB_NAME = 'n4thvj';
const STORE = 'clips';
/** One clip at a time, so it always overwrites rather than accumulating. */
const CLIP_ID = 'clip';

export const DEFAULT_TEXT = 'N4TH';

export function loadText(): string {
  try {
    return localStorage.getItem(TEXT_KEY) ?? DEFAULT_TEXT;
  } catch {
    return DEFAULT_TEXT;
  }
}

export function saveText(text: string) {
  try {
    localStorage.setItem(TEXT_KEY, text);
  } catch {
    // Storage blocked; the words just will not survive a reload.
  }
}

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE)) {
        request.result.createObjectStore(STORE);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/** Stores the clip, replacing whatever was there. */
export async function saveClip(file: Blob, name: string): Promise<void> {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put({ file, name }, CLIP_ID);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

/** Whether a stored file is footage or a still. */
export type ClipKind = 'video' | 'image';

/** What a Blob's own MIME type says it is. Anything unknown is treated as footage. */
export function clipKindOf(blob: Blob): ClipKind {
  return blob.type.startsWith('image/') ? 'image' : 'video';
}

/** The stored clip, or null when there is none or storage is unavailable. */
export async function loadClip(): Promise<{ file: Blob; name: string } | null> {
  try {
    const db = await openDb();
    const stored = await new Promise<unknown>((resolve, reject) => {
      const tx = db.transaction(STORE, 'readonly');
      const get = tx.objectStore(STORE).get(CLIP_ID);
      get.onsuccess = () => resolve(get.result);
      get.onerror = () => reject(get.error);
    });
    db.close();
    if (!stored || typeof stored !== 'object') return null;
    const { file, name } = stored as { file?: unknown; name?: unknown };
    if (!(file instanceof Blob)) return null;
    return { file, name: typeof name === 'string' ? name : 'clip' };
  } catch {
    return null;
  }
}

export async function clearClip(): Promise<void> {
  try {
    const db = await openDb();
    await new Promise<void>((resolve) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).delete(CLIP_ID);
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
    db.close();
  } catch {
    // Nothing stored, or storage unavailable. Either way there is none now.
  }
}
