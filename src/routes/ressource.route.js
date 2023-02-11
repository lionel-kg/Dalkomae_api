const express = require('express');
const router = express.Router();
const ressourceController = require('../controllers/ressource.controller');

router.get('/', ressourceController.getRessource);
router.post('/', ressourceController.createRessource);

module.exports = router;