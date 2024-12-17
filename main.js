import express from 'express';
import usuarioRoutes from './src/routes/usuario.routes.js'
//// Se instancia express en la variable app, y el puerto 3000 en PORT.
const app = express();
const PORT = 3000;

// Middleware para parcear formato JSON y multiformatos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', usuarioRoutes);


// Revisamos que el puerto esté arriba
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost${PORT} 🛸`);
})

