import mysql from "mysql2/promise"
import dotenv from "dotenv"
dotenv.config()
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'axnvee',
    password: 'axnvee188216',
    database: 'pomodoro'
})
// const connection = await mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE
// })

connection.connect()
export default connection