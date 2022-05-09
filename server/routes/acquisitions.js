const express = require('express');

const router = express.Router();

const auth = require("../auth");

const {verify, verifyAdmin} = auth;

const acqControllers = require('../controllers/acq-controller')

router.post('/createAcq/:id', verify, acqControllers.newAcq);

router.put('/updateAcq/:id', verify, acqControllers.updateAcq);

router.put('/updatePayAcq/:id', verify, acqControllers.updatePaymentAcq);


module.exports = router;