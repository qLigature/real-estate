const express = require('express');

const router = express.Router();

const auth = require("../auth");

const {verify, verifyAdmin} = auth;

const acqControllers = require('../controllers/acq-controller')

router.post('/createAcq/:id', verify, acqControllers.newAcq);

router.put('/updateAcq/:id', verify, acqControllers.updateAcq);

router.put('/updatePayAcq/:id', verify, acqControllers.updatePaymentAcq);

router.get('/getAllAcq', acqControllers.getAllAcq)

router.get('/getAllCompleteAcq', acqControllers.getAllCompleteAcq)

router.get('/getPendingAcq', acqControllers.getPendingAcq)

router.get('/getUserPendingAcq', verify, acqControllers.getUserPendingAcq)

router.get('/getUserCompletedAcq', verify, acqControllers.getUserCompletedAcq)

router.get('/getClientPendingAcq/:id', verify, /*verifyAdmin,*/ acqControllers.getClientPendingAcq)

router.get('/getClientCompletedAcq/:id', verify, /*verifyAdmin,*/ acqControllers.getClientCompletedAcq)

router.get('/searchAcq/:id', acqControllers.searchAcqByParamsName)
//localhost:5000/acquisitions/searchAcq/townhouse
//localhost:5000/acquisitions/searchAcq/hotels
//localhost:5000/acquisitions/searchAcq/sky

router.get('/searchAcqByName/', acqControllers.searchAcqByReqBody)

module.exports = router;