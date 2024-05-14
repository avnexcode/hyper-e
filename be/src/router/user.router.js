import HyperExpress from "hyper-express"
import { getUserDetailController, getUsersController, postUserController, putUserController, patchUserController, deleteUserController } from "../controllers/user.controller.js"

const router = new HyperExpress.Router()
router.get('/', getUsersController)
router.get('/:id', getUserDetailController)
router.post('/', postUserController)
router.put('/:id', putUserController)
router.patch('/:id', patchUserController)
router.delete('/:id', deleteUserController)
export default router