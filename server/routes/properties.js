const express = require('express');

const router = express.Router();

const prpControllers = require("../controllers/property-controller")

const auth = require("../auth");

const {verify, verifyAdmin} = auth;

router.post('/createPrp', prpControllers.createPrp);

router.post('/createLsPrp', prpControllers.createLeasePrp);

router.put('/editPrp/:id', prpControllers.editPrp);

router.get('/getAllPrp', prpControllers.getAllPrp);

router.get('/getPrpByName/:id', prpControllers.getPropertyByNameParams)

router.get('/getPrpByNameBdy', prpControllers.getPropertyByNameReqBody)

router.get('/getPrpById/:id', prpControllers.getPropertyById)

router.get('/getCategoryHotel', prpControllers.getPrpCategoryHotel)

router.get('/getCategoryTownhouse', prpControllers.getPrpCategoryTownhouse)

router.get('/getCategoryCondo', prpControllers.getPrpCategoryCondominium)

router.get('/getCategoryTower', prpControllers.getPrpCategoryTower)

router.get('/prpCityManila', prpControllers.cityManila)

router.get('/prpCityQC', prpControllers.cityQC)

router.get('/prpNearMe', prpControllers.propertyNearMe)

module.exports = router;