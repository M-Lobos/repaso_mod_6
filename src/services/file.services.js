import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createFile = async (fileData, pathData) => {
    try {
        const datafilePath = path.join(__dirname, `../${pathData.filename}`);

        await fs.mkdir(path.dirname(datafilePath), {recursive: true});

        await fs.writeFile(datafilePath, JSON.stringify(fileData, null, 4), 'utf8');
    
    } catch (error) {
        throw new Error('Error al crear el archivo de datos', error);
    }
}

export const readFile = async (pathData) =>{
    try {
        const datafilePath = path.join(__dirname, `../${pathData}`);

    const fileData = await fs.readFile(datafilePath, 'utf8');
    
    return JSON.parse(fileData);
    } catch (error) {
        throw new Error('Error al crear el archivo de datos', error);
    }
}