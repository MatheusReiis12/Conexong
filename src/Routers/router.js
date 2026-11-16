const express = require('express');
const router = express.Router();
const publicacaoRoutes = require('./publicacaoRoutes');

router.use(publicacaoRoutes);

module.exports = router;   


