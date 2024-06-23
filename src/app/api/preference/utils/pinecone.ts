import { pc } from '@/server/pinecone'

export async function getAllNamespaces() {
  const index = pc.index('restaurants')

  const stats = await index.describeIndexStats()
  if (!stats.namespaces) return []
  return Object.keys(stats.namespaces)
}

export async function similaritySearch(vector: number[], namespace: string) {
  const index = pc.index('restaurants')
  const queryResponse = await index.namespace(namespace).query({
    topK: 3,
    vector,
    includeValues: true,
  })
  return queryResponse
}
