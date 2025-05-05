//logica http
import { Request, Response } from 'express'
import * as userService from './service'

export async function getUsersController(_req: Request, res: Response) {
    const users = await userService.getAllUsers()
    res.json(users)
}
