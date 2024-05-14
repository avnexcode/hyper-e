import { findUserById, findUsers, insertUser, editUser, dropUser } from "../repositories/user.repository.js";

export const getAllUsers = async () => {
    const users = await findUsers()
    return users
}

export const getUserById = async (id) => {
    const user = await findUserById(id)
    if (!user) {
        throw new Error('User Undefined PROT')
    }
    return user
}

export const createUser = async (newUserData) => {
    await insertUser(newUserData)
}

export const deleteUser = async (id) => {
    await getUserById(id)
    await dropUser(id)
}

export const updateUser = async (userData, id) => {

}