/**
 * Plays custom sounds based on the provided configuration options.
 *
 * @param options An array of CustomSoundOptions specifying the channels and audio files to play.
 * @returns void
 */
export function customSound(options: CustomSoundOptions[]): void;

/**
 * Configuration options for playing custom sounds.
 */
export interface CustomSoundOptions {
  /**
   * The channel identifier for the custom sound.
   */
  channelId: string;

  /**
   * The audio file path or resource identifier for the custom sound.
   * Currently only support .wav audio file.
   * Audio file must be set to folder: App_Resources/Android/src/main/assets/raw
   */
  audio: string;
}
