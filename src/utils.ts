export function getAudio(audioPath: string, volume?: number) {
  const audio = new Audio(audioPath)
  if (volume) audio.volume = volume
  return audio
}

export async function delay(seconds: number): Promise<void> {
  return new Promise((res) => {
    setTimeout(res, seconds * 1000)
  })
}
