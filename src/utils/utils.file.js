import { createFile, readFile } from "../services/file.services.js";

//método post
export const createDataFile = async (data, dataPath) => {
    try {
        const datafile = await readFile(dataPath)
        let dataJson = null

        !datafile || datafile.length === 0 ? (dataJson = [data]) : dataJson = [...datafile, data]

        await createFile(dataJson, dataPath)
    } catch (error) {
        throw new Error('Error al gestionar la creación del archivo con la data', error)
    }
}