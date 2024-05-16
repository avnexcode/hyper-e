import db from "../config/database.js"
// import timeNow from "time-now"
export const findFeatures = async () => {
    const sql = `SELECT * FROM features`
    const [result, fields] = await db.execute(sql)
    return result
}

export const findFeatureById = async (id) => {
    const sql = `SELECT * FROM features WHERE id = ?`
    const values = [id]

    const [result, fields] = await db.execute(sql, values)

    return result[0]
}

export const insertFeature = async (newFeatureData) => {
    const feature = {
        username: newFeatureData.username,
        title: newFeatureData.title,
        started_time: newFeatureData.started_time,
        status: newFeatureData.status,
        level: newFeatureData.level,
    }
    const sql = `INSERT INTO features (username, title,started_time, status, level) VALUES (?, ?, ?, ?,?)`

    const values = [feature.username, feature.title, feature.started_time, feature.status, feature.level]

    const [result, fields] = await db.execute(sql, values)

    return result
}

export const editFeature = async (featureData, id) => {
    const feature = {
        username: featureData.username,
        title: featureData.title,
        started_time: featureData.started_time,
        end_time: featureData.end_time,
        status: featureData.status,
        level: featureData.level,
    }
    // console.log(typeof id)
    // return
    const sql = `UPDATE features SET username = ?, title = ?, started_time = ?, end_time = ?, status = ?, level = ? WHERE started_time IS NOT NULL AND id = ?`;

    const values = [feature.username, feature.title, feature.started_time, feature.end_time, feature.status, feature.level, id]

    const [result, fields] = await db.execute(sql, values)

    return result
}

export const dropFeature = async (id) => {
    const sql = `DELETE FROM features WHERE id = ?`
    const values = [id]

    const [result, fields] = await db.execute(sql, values)

    return result
}