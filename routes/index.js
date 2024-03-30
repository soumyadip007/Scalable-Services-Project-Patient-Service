const { Router } = require('express');
const patient = require('./patient');
const router = new Router();
const v1 = new Router();

v1.use('/patient', patient);

router.use('/v1', v1);

module.exports = router;
