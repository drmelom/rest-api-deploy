import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb'
import 'dotenv/config'

const USER = process.env.MONGODB_USER
const PASSWORD = process.env.MONGODB_PASSWORD
const uri = `mongodb://${USER}:${PASSWORD}@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

async function connect () {
  try {
    await client.connect()
    const database = client.db('drEnvioChallengeCristian')
    return  {
        products:database.collection('products'),
        users:database.collection('users')
    }
     
      
  } catch (error) {
    console.error('Error connecting to the database')
    console.error(error)
    await client.close()
  }
}

export class PriceModel {
  static async getPriceByUserId ({product, userId}) {
    const {products,users} = await connect()
    const objectId = new ObjectId(userId)

    const user = await users.findOne({ _id: objectId});
    if(!user) return {message:"User not found"} 

    const specialPrice = user.special_price
    if(specialPrice.lenght === 0) return {message:"User has no special price"}

    const productByName = await products.findOne({ model: product })
    if(!productByName) return {message:"Product not found"}
    
    const price = specialPrice.includes(productByName.brand) ? productByName.special_price : productByName.price
    return { price }

  } 
}