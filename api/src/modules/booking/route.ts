import { Router } from 'express'
import { createBooking } from './controller'

const router = Router()

router.post('/bookings', createBooking)

export default router
