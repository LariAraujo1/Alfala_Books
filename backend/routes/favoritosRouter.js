import { getFavoritos, postFavorito, deletaFavorito } from '../controller/favoritosController.js';

import {Router} from 'express'
const router = Router(); 

router.get('/', getFavoritos)
router.post("/:id", postFavorito);
router.delete('/:id', deletaFavorito)

export default router;
