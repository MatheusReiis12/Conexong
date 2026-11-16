const express = require('express');
const router = express.Router();
const { listar, buscarPorId, adicionarPublicao, editar, deletar } = require('../Controllers/publicacaoControllers');

router.get('/publicacao', listar);
router.get('/publicacao/:id', buscarPorId);
router.post('/publicacao', adicionarPublicao);
router.put('/publicacao/:id', editar);
router.delete('/publicacao/:id', deletar);

module.exports = router;