/**
 * Where a recording's sound comes from.
 *
 * Two honest answers, and they are not the same thing.
 *
 * The microphone hears the room: the music as it actually sounded in there,
 * with the space and the crowd in it. That is what most VJ footage sounds
 * like and it needs nothing set up.
 *
 * Music takes the audio straight off whatever is playing it — a browser tab,
 * or the whole machine where the browser allows it. No room, no crowd, no
 * clipping from a PA. It costs a picker dialog at the start of every take,
 * and it is the browser that decides whether any sound comes through at all:
 * Chrome offers "share tab audio", Safari and Firefox largely do not.
 */
export type SoundSource = 'mic' | 'music' | 'off';

export const SOUND_LABEL: Record<SoundSource, string> = {
  mic: 'ROOM',
  music: 'TAB',
  off: 'MUTE',
};

export const SOUND_HINT: Record<SoundSource, string> = {
  mic: 'Take sound: the room through the microphone, music and all, as it actually sounded (S)',
  music: 'Take sound: straight off a tab or the machine, with no room in it. Asks which, each take (S)',
  off: 'Take sound: none (S)',
};

/** The next source in the cycle, for the one button that changes it. */
export function nextSound(current: SoundSource): SoundSource {
  return current === 'mic' ? 'music' : current === 'music' ? 'off' : 'mic';
}

/** A stream opened for a take, and whether stopping the take should close it. */
export interface TakeAudio {
  stream: MediaStream | null;
  /** True when this was opened for the take rather than borrowed. */
  owned: boolean;
  /** Set when the chosen source gave nothing, so the take can say why. */
  problem?: string;
}

/**
 * Sound for one take.
 *
 * `borrowed` is the analyser's own microphone stream when audio-reactive mode
 * is already running. Reusing it matters: a second getUserMedia would put a
 * permission prompt on screen in the middle of a set.
 */
export async function openTakeAudio(
  source: SoundSource,
  borrowed: MediaStream | null,
): Promise<TakeAudio> {
  if (source === 'off') return { stream: null, owned: false };

  if (source === 'mic') {
    if (borrowed && borrowed.getAudioTracks().some((t) => t.readyState === 'live')) {
      return { stream: borrowed, owned: false };
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        // The music is the point, so leave it alone: the processing meant for
        // speech treats a bassline as noise and ducks it.
        audio: {
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false,
        },
      });
      return { stream, owned: true };
    } catch {
      return {
        stream: null,
        owned: false,
        problem: 'The microphone was refused, so this take has no sound.',
      };
    }
  }

  // Music: the video track is the price of admission for the audio one, and
  // it is dropped immediately — the picture here is already the canvas.
  try {
    const display = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true,
    });
    for (const track of display.getVideoTracks()) track.stop();
    if (display.getAudioTracks().length === 0) {
      return {
        stream: null,
        owned: false,
        problem:
          'No sound came through. Chrome asks you to tick "share tab audio" ' +
          'in the picker; other browsers do not offer it at all, so MIC is the ' +
          'one that always works.',
      };
    }
    return { stream: display, owned: true };
  } catch {
    return {
      stream: null,
      owned: false,
      problem: 'No source was picked, so this take has no sound.',
    };
  }
}

/** Whether this browser will even offer to hand over a tab's sound. */
export function canCaptureMusic(): boolean {
  return typeof navigator.mediaDevices?.getDisplayMedia === 'function';
}
