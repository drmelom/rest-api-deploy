import express, { json } from 'express'
import cors from 'cors'
import { productsRouter } from './routes/products.js'
import 'dotenv/config'
import { priceRouter } from './routes/price.js'


const app = express()

app.disable('x-powered-by')
app.use(json())
app.use(cors())


app.use('/products', productsRouter)
app.use('/price', priceRouter)

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
    console.log(`Server listening on port:${PORT}`)
})
