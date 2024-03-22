export function getAudio(audioPath: string, volume?: number) {
  const audio = new Audio(audioPath)
  if (volume) audio.volume = volume
  return audio
}
