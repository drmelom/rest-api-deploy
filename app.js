import express, { json } from 'express'
import cors from 'cors'
import { movieRouter } from './routes/movies.js'
const app = express()

app.disable('x-powered-by')
app.use(json())
app.use(cors())


app.use('/movies', movieRouter)

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
})
