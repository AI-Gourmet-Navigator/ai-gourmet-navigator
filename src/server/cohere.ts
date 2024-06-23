import { CohereClient } from 'cohere-ai'
import { env } from '@/env'

export const cohere = new CohereClient({
  token: env.CO_API_KEY,
})
