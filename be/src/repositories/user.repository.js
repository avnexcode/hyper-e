import db from "../config/database.js"
import bcrypt from "bcrypt"
export const findUsers = async () => {
    const sql = `SELECT * FROM users`

    const [result, fields] = await db.execute(sql)

    return result
}

export const findUserById = async (id) => {
    const sql = `SELECT * FROM users WHERE id = ?`
    const values = [id]

    const [result, fields] = await db.execute(sql, values)

    return result[0]
}

export const insertUser = async (newUserData) => {
    const user = {
        email: newUserData.email,
        username: newUserData.username,
        password: newUserData.password,
        token: newUserData.token,
    }
    const passwordHashed = await bcrypt.hash(user.password, 10)

    const sql = `INSERT INTO users (email,username,password, token) VALUES (?, ?, ?, ?)`
    const values = [user.email, user.username, passwordHashed, user.token]

    const [result, fields] = await db.execute(sql, values)

    return result
}

export const editUser = async (userData, id) => {

}

export const dropUser = async (id) => {
    const sql = `DELETE FROM users WHERE id = ?`
    const values = [id]

    const [result, flieds] = await db.execute(sql, values)
    
    return result
}