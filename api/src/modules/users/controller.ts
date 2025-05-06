//logica http
import { Request, Response } from 'express'
import * as userService from './service'

export async function getUsersController(_req: Request, res: Response) {
    const users = await userService.getAllUsers()
    res.json(users)
}

export async function createUserController(req: Request, res: Response) {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400).json({ error: 'Name, email and password are required' })
        return
    }

    const user = await userService.createUser(name, email, password)

    res.status(201).json(user)
}
