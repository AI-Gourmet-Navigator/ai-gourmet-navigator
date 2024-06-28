import { cohere } from '@/server/cohere'

export async function getEmbedData(texts: string[]) {
  if (texts) {
    const response = await cohere.embed({
      model: 'embed-english-v3.0',
      texts,
      inputType: 'classification',
    })
    return response.embeddings
  }
}
