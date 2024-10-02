import { z } from 'zod'

const configSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string()
})

const configProject = configSchema.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
})

if (!configProject.success) {
  console.error(configProject.error.errors)
  throw new Error('Invalid configuration in .env file!')
}

const envConfiguration = configProject.data

export default envConfiguration
