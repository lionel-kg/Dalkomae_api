const express = require('express');
const router = express.Router();
const ressourceController = require('../controllers/ressource.controller');


router.get('/', ressourceController.getRessource);
router.get('/expiration-date', ressourceController.getRessourceByExpirationDate);
router.get('/search', ressourceController.getSearchRessource);
router.get('/soon-expired', ressourceController.getSoonExpiredRessource);
router.get('/expired', ressourceController.getExpiredRessource);
router.post('/', ressourceController.createRessource);

module.exports = router;