import { Usuario } from '../models/usuario.model.js';

// Se crea un usuario con los datos pasados por parámetro   

export const createNuevoUsuario = async(req, res ) => {
    try {
        const data = req.body
        const usuario = new Usuario(data);

        res.status(201).json({
            message: 'Usuario creado correctamente',
            stauts: 201,
            data: usuario
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los usuarios",
            status: 500,
            error,
        });
    }
}