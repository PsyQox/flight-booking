//Registro global de rutas
import { Router } from 'express'
import usersRoutes from '../modules/users/route'
import bookingRoutes from '../modules/booking/route'

const router = Router()

router.use('/users', usersRoutes)
router.use('/booking', bookingRoutes)

export default router
