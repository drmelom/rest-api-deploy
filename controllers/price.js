import { PriceModel } from "../models/mongodb/price.js";

export class PriceController {
  static async getPriceByUserId( req , res) {
    const {userId, product} = req.params;
    const price = await PriceModel.getPriceByUserId({userId, product});
    res.json(price);
  }
}