import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_EMAIL_SERVICE_ID: z.string(),
  NEXT_PUBLIC_EMAIL_TEMPLATE_ID: z.string(),
  NEXT_PUBLIC_EMAIL_KEY: z.string(),
})

const parsedEnv = envSchema.safeParse({
  NEXT_PUBLIC_EMAIL_SERVICE_ID: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
  NEXT_PUBLIC_EMAIL_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
  NEXT_PUBLIC_EMAIL_KEY: process.env.NEXT_PUBLIC_EMAIL_KEY,
})

if (!parsedEnv.success) {
  console.log('Invalid env variables', parsedEnv.error.flatten().fieldErrors)

  throw new Error('Invalid env variables')
}

export const env = parsedEnv.data
