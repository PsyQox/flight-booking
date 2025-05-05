import 'dotenv/config'

function getEnv(key: string, required = true): string {
    const value = process.env[key]
    if (!value && required) {
        throw new Error(`Missing required environment variable: ${key}`)
    }
    return value as string
}

export const ENV = {
    NODE_ENV: getEnv('NODE_ENV'),
    PORT: getEnv('PORT'),
    DATABASE_URL: getEnv('DATABASE_URL'),
}
