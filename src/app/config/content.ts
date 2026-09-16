/**
 * The visuals whose content you supply: the words for Kinetic Type, and a file
 * each for the visuals that play one.
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
/**
 * What the single shared clip used to be stored under.
 *
 * Clips are per visual now — uploading footage to Clip should not silently
 * become Mosaic's source too. Anything found under the old key is handed to
 * both of them once and then removed, so a file chosen before this change is
 * still there afterwards rather than quietly disappearing.
 */
const LEGACY_ID = 'clip';
const LEGACY_HEIRS = ['video', 'mosaic'];

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

/** Whether a stored file is footage or a still. */
export type ClipKind = 'video' | 'image';

/** One visual's file, ready to hand to a renderer. */
export interface Clip {
  url: string;
  name: string;
  kind: ClipKind;
}

/** Every visual's file, keyed by pattern. A visual with none is simply absent. */
export type Clips = Record<string, Clip>;

/** What a Blob's own MIME type says it is. Anything unknown is treated as footage. */
export function clipKindOf(blob: Blob): ClipKind {
  return blob.type.startsWith('image/') ? 'image' : 'video';
}

/** Stores one visual's file, replacing whatever that visual had. */
export async function saveClip(pattern: string, file: Blob, name: string): Promise<void> {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put({ file, name }, pattern);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

function read(store: IDBObjectStore, key: string): Promise<{ file: Blob; name: string } | null> {
  return new Promise((resolve) => {
    const get = store.get(key);
    get.onsuccess = () => {
      const stored: unknown = get.result;
      if (!stored || typeof stored !== 'object') return resolve(null);
      const { file, name } = stored as { file?: unknown; name?: unknown };
      if (!(file instanceof Blob)) return resolve(null);
      resolve({ file, name: typeof name === 'string' ? name : 'clip' });
    };
    get.onerror = () => resolve(null);
  });
}

/**
 * Every stored file, keyed by the visual it belongs to.
 *
 * Empty when there is none or storage is unavailable — a browser with
 * IndexedDB blocked should lose the files, not the app.
 */
export async function loadClips(): Promise<Record<string, { file: Blob; name: string }>> {
  try {
    const db = await openDb();
    const keys = await new Promise<IDBValidKey[]>((resolve, reject) => {
      const request = db.transaction(STORE, 'readonly').objectStore(STORE).getAllKeys();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });

    const out: Record<string, { file: Blob; name: string }> = {};
    const tx = db.transaction(STORE, 'readonly');
    const store = tx.objectStore(STORE);
    for (const key of keys) {
      if (typeof key !== 'string') continue;
      const stored = await read(store, key);
      if (stored) out[key] = stored;
    }
    db.close();

    // The one shared clip from before, handed to both visuals that used it.
    const legacy = out[LEGACY_ID];
    if (legacy) {
      delete out[LEGACY_ID];
      for (const heir of LEGACY_HEIRS) {
        if (!out[heir]) {
          out[heir] = legacy;
          saveClip(heir, legacy.file, legacy.name).catch(() => {});
        }
      }
      clearClip(LEGACY_ID).catch(() => {});
    }
    return out;
  } catch {
    return {};
  }
}

/** Forgets one visual's file. */
export async function clearClip(pattern: string): Promise<void> {
  try {
    const db = await openDb();
    await new Promise<void>((resolve) => {
      const tx = db.transaction(STORE, 'readwrite');
      tx.objectStore(STORE).delete(pattern);
      tx.oncomplete = () => resolve();
      tx.onerror = () => resolve();
    });
    db.close();
  } catch {
    // Nothing stored, or storage unavailable. Either way there is none now.
  }
}
