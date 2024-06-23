// import { POST } from './route'
// import { jest } from '@jest/globals'
// import fetchMock from 'jest-fetch-mock'
// import { getEmbedData } from './utils/cohere'
// import { getAllNamespaces, similaritySearch } from './utils/pinecone'
// import { fetchPlaceDetails } from './utils/google-map'

// fetchMock.enableMocks()

// jest.mock('./utils/cohere')
// jest.mock('./utils/pinecone')
// jest.mock('./utils/google-map')

// describe('POST function', () => {
//   beforeEach(() => {
//     fetchMock.resetMocks()
//   })

//   it('should return 200 and restaurant data for valid input', async () => {
//     const mockRequest = {
//       json: jest.fn().mockResolvedValue({
//         genre: 'Italian',
//         atmosphere: 'Casual',
//         rate: 4,
//         numberOfRatings: 120,
//         placeLevel: 3,
//         location: 'Vancouver',
//       }),
//     }

//     ;(getEmbedData as jest.Mock).mockResolvedValue([[0.1, 0.2, 0.3]])
//     ;(getAllNamespaces as jest.Mock).mockResolvedValue(['namespace1'])
//     ;(similaritySearch as jest.Mock).mockResolvedValue({
//       matches: [
//         { id: 'place1', score: 0.9 },
//         { id: 'place2', score: 0.8 },
//         { id: 'place3', score: 0.7 },
//       ],
//     })
//     ;(fetchPlaceDetails as jest.Mock).mockResolvedValue({
//       status: 'OK',
//       result: { name: 'Restaurant 1', rating: 4.5, user_ratings_total: 150 },
//     })

//     const response = await POST(mockRequest)
//     const json = await response.json()

//     expect(response.status).toBe(200)
//     expect(json).toEqual([
//       {
//         name: 'Restaurant 1',
//         rating: 4.5,
//         user_ratings_total: 150,
//         score: 0.9,
//       },
//       {
//         name: 'Restaurant 1',
//         rating: 4.5,
//         user_ratings_total: 150,
//         score: 0.8,
//       },
//       {
//         name: 'Restaurant 1',
//         rating: 4.5,
//         user_ratings_total: 150,
//         score: 0.7,
//       },
//     ])
//   })

//   it('should return 400 for invalid input', async () => {
//     const mockRequest = {
//       json: jest.fn().mockResolvedValue({
//         genre: '',
//         atmosphere: 'Casual',
//         rate: 4,
//         numberOfRatings: 120,
//         placeLevel: 3,
//         location: 'Vancouver',
//       }),
//     } as unknown as Request

//     const response = await POST(mockRequest)

//     expect(response.status).toBe(400)
//   })

//   it('should return 500 if embed data fetch fails', async () => {
//     const mockRequest = {
//       json: jest.fn().mockResolvedValue({
//         genre: 'Italian',
//         atmosphere: 'Casual',
//         rate: 4,
//         numberOfRatings: 120,
//         placeLevel: 3,
//         location: 'Vancouver',
//       }),
//     } as unknown as Request

//     ;(getEmbedData as jest.Mock).mockRejectedValue(
//       new Error('Failed to fetch embed data'),
//     )

//     const response = await POST(mockRequest)

//     expect(response.status).toBe(500)
//     expect(await response.text()).toBe('Failed to get embed data')
//   })

//   // Add more tests for other error cases as needed
// })
