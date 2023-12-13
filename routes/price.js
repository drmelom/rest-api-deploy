
import { Router } from "express"
import { PriceController } from "../controllers/price.js"

export const priceRouter = Router()

priceRouter.get('/:userId/:product', PriceController.getPriceByUserId)
