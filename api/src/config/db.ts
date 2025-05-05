import { Pool } from 'pg'
import { ENV } from './env'

export const db = new Pool({
    connectionString: ENV.DATABASE_URL,
    // Opcionalmente podrías poner:
    // ssl: { rejectUnauthorized: false }, // en producción en algunos proveedores
})

db.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch((error) => {
        console.error('Database connection error:', errorc)
        process.exit(1)
    })
