import { getAllFeatures, getFeatureById, createFeature, updateFeature } from "../services/feature.service.js"
export const getFeaturesController = async (req, res) => {
    try {
        const features = await getAllFeatures()
        res.status(200).json({ message: "Data Features" , features})
    } catch (error) {
        if (error) {
            res.status(400).send(error.message)
        }
    }
}

export const getFeatureDetailController = async (req, res) => {
    try {
        const features = await getFeatureById(parseInt(req.params.id))
        res.status(200).json({ message: "Detail Feature" , features})
    } catch (error) {
        if (error) {
            res.status(400).send(error.message)
        }
    }
}

export const postFeatureController = async (req, res) => {
    try {
        await createFeature(await req.json())
        res.send("Feature Added")
    } catch (error) {
        if (error) {
            res.status(400).send(error.message)
        }
    }
}

export const putFeatureController = async (req, res) => {
    try {
        await updateFeature()
    } catch (error) {
        if (error) {
            res.status(400).send(error.message)
        }
    }
}

export const patchFeatureController = async (req, res) => {
    try {

    } catch (error) {
        if (error) {
            res.status(400).send(error.message)
        }
    }
}

export const deleteFeatureController = async (req, res) => {
    try {
        res.status(200).json({ message: "Feature Deleted" })
    } catch (error) {
        if (error) {
            res.status(400).send(error.message)
        }
    }
}