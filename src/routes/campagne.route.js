const express = require('express');
const router = express.Router();
const campagneController = require('../controllers/campagne.controller');

router.get('/', campagneController.getCampagnes);
router.get('/:id', campagneController.getCampagne);
router.post('/', campagneController.createCampagne);

module.exports = router;