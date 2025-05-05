import 'dotenv/config'
import express from 'express'
import router from './modules/booking/route'

const app = express()

app.use(express.json())
// app.use('/api', router)
app.use('/api', router)

export default app
