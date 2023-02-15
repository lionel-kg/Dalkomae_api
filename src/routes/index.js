const express = require('express');
const router = express.Router();
const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const campagneRouter = require('./campagne.route');
const ressourceRouter = require('./ressource.route');

router.use('/auth', authRouter);
router.use('/user', userRouter);

router.use('/campagne', campagneRouter);
router.use('/ressource', ressourceRouter);


module.exports = router;