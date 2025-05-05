import app from './app'
import { ENV } from './config/env'

const PORT = ENV.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
