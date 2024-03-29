export function getAudio(audioPath: string, volume?: number) {
  const audio = new Audio(audioPath)
  if (volume) audio.volume = volume
  return audio
}

export async function delay(seconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000)
  })
}
