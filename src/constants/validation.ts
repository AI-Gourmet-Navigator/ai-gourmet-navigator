import { z } from 'zod'

export const schemas = {
  genre: z.string().min(1, { message: 'Genre cannot be empty' }),
  atmosphere: z.string().min(1, { message: 'Atmosphere cannot be empty' }),
  rate: z
    .number()
    .min(1)
    .max(5)
    .or(z.string().regex(/^[1-5]$/, 'Rate must be a number between 1 and 5')),
  numberOfRatings: z
    .number()
    .min(0)
    .or(
      z
        .string()
        .regex(/^\d+$/, 'Number of Ratings must be a non-negative number'),
    ),
  placeLevel: z
    .number()
    .min(1)
    .max(5)
    .or(
      z
        .string()
        .regex(/^[1-5]$/, 'Place Level must be a number between 1 and 5'),
    ),
}

export type SchemaKeys = keyof typeof schemas
