
import mysql from 'mysql2/promise';
import 'dotenv/config'

const DEFAULT_CONFIG = {
    host:'localhost',
    user:'root',
    port : 3308,
    password:'test',
    database:'moviesdb'
}

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG;

const connection = await mysql.createConnection(connectionString );

export class MovieModel {
  static async getAll ({ genre }) {
    if (genre){

    }

    const [movies] = await connection.query(
        'SELECT title, year, director, duration, poster, rate, BIN_TO_UUID(id) id FROM movie;'
    )
    
    return movies
   
  }

  static async getById ({ id }) {
   
  }

  static async create ({ input }) {
    
  }

  static async delete ({ id }) {
    
  }

  static async update ({ id, input }) {
    
  }
}