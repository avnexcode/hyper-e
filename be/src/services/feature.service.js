import { findFeatureById, findFeatures, insertFeature, editFeature, dropFeature } from "../repositories/feature.repository.js";

export const getAllFeatures = async () => {
    const features = await findFeatures()
    return features
}

export const getFeatureById = async (id) => {
    const feature = await findFeatureById(id)
    if (!feature) {
        throw new Error('Feature Undefined PROT')
    }
    return feature
}

export const createFeature = async (newFeatureData) => {
    await insertFeature(newFeatureData)
}

export const deleteFeature = async (id) => {
    await getFeatureById(id)
    await dropFeature(id)
}

export const updateFeature = async (featureData, id) => {
    await editFeature(featureData, id)
}