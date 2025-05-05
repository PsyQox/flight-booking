import { Request, Response } from 'express'
import { BookingInput } from './types'

export const createBooking = (req: Request, res: Response): any => {
    const body = req.body as Partial<BookingInput>

    console.log(body)

    if (!body.passengerName || !body.origin || !body.destination || !body.date) {
        res.status(400).json({ error: 'Missing required fields' })
        return
    }

    const isDateValidate = !isNaN(Date.parse(body.date))

    console.log(isDateValidate)

    if (!isDateValidate) {
        res.status(400).json({ error: 'Invalid date format' })
        return
    }

    const booking: BookingInput = {
        passengerName: body.passengerName,
        origin: body.origin,
        destination: body.destination,
        date: body.date,
    }

    res.status(201).json({ message: 'Booking created successfully', booking })

    return
}
