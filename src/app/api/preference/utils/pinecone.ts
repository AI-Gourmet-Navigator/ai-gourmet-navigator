import { pc } from '@/server/pinecone'
import { env } from '@/env'

export async function getAllNamespaces() {
  const index = pc.index(env.PINECONE_DATABASE_NAME)

  const stats = await index.describeIndexStats()
  if (!stats.namespaces) return []
  return Object.keys(stats.namespaces)
}

export async function similaritySearch(vector: number[], namespace: string) {
  const index = pc.index(env.PINECONE_DATABASE_NAME)
  const queryResponse = await index.namespace(namespace).query({
    topK: 5,
    vector,
    includeValues: true,
  })
  return queryResponse
}
