import { Router } from 'express';
import {
    createNuevoUsuario,
} from '../controllers/usuario.controller.js'

const router = Router();

router.post('/usuario', createNuevoUsuario);

export default router;
