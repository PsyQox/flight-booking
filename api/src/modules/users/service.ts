//Logica de acceso a la base de datos
import { db } from '../../config/db'
import { User } from './types'
import { randomUUID } from 'crypto'

export async function getAllUsers(): Promise<User[]> {
    const result = await db.query('SELECT * FROM users')
    return result.rows
}

export async function createUser(name: string, email: string, password: string) {
    const id = randomUUID()
    const result = await db.query(
        `INSERT INTO users (id, full_name, email, password, created_at) values ($1, $2, $3, $4, NOW()) RETURNING *`,
        [id, name, email, password]
    )
    return result.rows[0]
}
