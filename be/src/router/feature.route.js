import HyperExpress from "hyper-express"
import { getFeaturesController, getFeatureDetailController, postFeatureController, putFeatureController, patchFeatureController, deleteFeatureController } from "../controllers/feature.controller.js"

const router = new HyperExpress.Router()

router.get('/', getFeaturesController)
router.get('/:id', getFeatureDetailController)
router.post('/', postFeatureController)
router.put('/:id', putFeatureController)
router.patch('/:id', patchFeatureController)
router.delete('/:id', deleteFeatureController)
export default router