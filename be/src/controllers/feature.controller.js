import { getAllFeatures, getFeatureById, createFeature, updateFeature } from "../services/feature.service.js"
export const getFeaturesController = async (req, res) => {
    try {
        const features = await getAllFeatures()
        res.status(200).json({ message: "Data Features", features })
    } catch (error) {
        if (error) {
            res.status(400).send(error.message)
        }
    }
}

export const getFeatureDetailController = async (req, res) => {
    try {
        const features = await getFeatureById(parseInt(req.params.id))
        res.status(200).json({ message: "Detail Feature", features })
    } catch (error) {
        if (error) {
            res.status(400).send(error.message)
        }
    }
}

export const postFeatureController = async (req, res) => {
    const feature = await req.json()
    try {
        const result = await createFeature(feature)
        res.status(200).json({ message: "Feature Added", feature, result })
    } catch (error) {
        if (error) {
            res.status(400).send(error.message)
        }
    }
}

export const putFeatureController = async (req, res) => {
    const feature = await req.json()
    if (!(feature.username && feature.title && feature.started_time && feature.end_time && feature.status && feature.level)) {
        return res.status(500).json({ message: "Missing some fields" })
    }
    try {
        const result = await updateFeature(feature, req.params.id)
        res.status(200).json({ message: "Feature Updateed", feature, result })
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