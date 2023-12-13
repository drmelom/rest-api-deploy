import { MongoClient, ServerApiVersion } from 'mongodb'
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
    return  database.collection('products')
     
      
  } catch (error) {
    console.error('Error connecting to the database')
    console.error(error)
    await client.close()
  }
}

export class ProductModel {
  static async getAll () {
    const db = await connect()

    return db.find({ stock: { $gt: 0 } }).toArray()
  }

}