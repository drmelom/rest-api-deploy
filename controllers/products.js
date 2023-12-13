import { ProductModel } from "../models/mongodb/products.js";

export class ProductController {
  static async getAll( _ , res) {
    const movies = await ProductModel.getAll();
    res.json(movies);
  }
  
}
