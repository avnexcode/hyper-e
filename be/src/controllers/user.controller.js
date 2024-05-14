import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from "../services/user.service.js";

export const getUsersController = async (req, res) => {
    try {
        const users = await getAllUsers()
        res.status(200).json({ message: "Data Users", users })
    } catch (error) {
        if (error) {
            res.status(400).send(error.message)
        }
    }
}

export const getUserDetailController = async (req, res) => {
    try {
        const user = await getUserById(parseInt(req.params.id))
        res.status(200).json({ message: "Detail User", user })
    } catch (error) {
        if (error) {
            res.status(400).send(error.message)
        }
    }
}

export const postUserController = async (req, res) => {
    try {
        await createUser(await req.json())
        res.send("User Added")
    } catch (error) {
        if (error) {
            res.status(400).send(error.message)
        }
    }
}

export const putUserController = async (req, res) => {
    try {

    } catch (error) {
        if (error) {
            res.status(400).send(error.message)
        }
    }
}

export const patchUserController = async (req, res) => {
    try {

    } catch (error) {
        if (error) {
            res.status(400).send(error.message)
        }
    }
}

export const deleteUserController = async (req, res) => {
    try {
        await deleteUser(parseInt(req.params.id))
        res.status(200).json({ message: "User Deleted"})
    } catch (error) {
        if (error) {
            res.status(400).send(error.message)
        }
    }
}