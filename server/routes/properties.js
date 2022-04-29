const express = require('express');

const router = express.Router();

const prpControllers = require("../controllers/property-controller")

const auth = require("../auth");

const {verify, verifyAdmin} = auth;

router.post('/createPrp', prpControllers.createPrp);

router.post('/createLsPrp', prpControllers.createLeasePrp);

router.put('/editPrp/:id', prpControllers.editPrp);

router.get('/getAllPrp', prpControllers.getAllPrp);



module.exports = router;