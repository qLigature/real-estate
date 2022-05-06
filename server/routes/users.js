const express = require('express');

const router = express.Router();

const userControllers = require("../controllers/user-controller")

const auth = require("../auth");

const {verify, verifyAdmin} = auth;

router.post('/register', userControllers.registerUser);

router.post('/login', userControllers.loginUser)

router.put('/updToClient/:id', userControllers.updToClient)

router.get('/retrieveUsers',verify, userControllers.retrieveAllUsers)

router.get('/retrieveAdmins',verify, userControllers.retrieveAllAdmin)

router.get('/retrieveClients',verify, userControllers.retrieveAllClients)

router.get('/retrieveUser/:id', userControllers.findUserById)

router.get('/userDetails', verify, userControllers.userDetails)


module.exports = router;