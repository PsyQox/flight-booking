//Logica de acceso a la base de datos
import { db } from '../../config/db'
import { User } from './types'
import { randomUUID } from 'crypto'

export async function getAllUsers(): Promise<User[]> {
    const result = await db.query('SELECT * FROM users')
    return result.rows
}

export async function createUser(name: string, email: string) {
    const id = randomUUID()
    const result = await db.query(
        `INSERT INTO users (id, name, email, created_at) values ($1, $2, $3, NOW()) RETURNING *`,
        [id, name, email]
    )
    return result.rows[0]
}
