const express = require('express');

const router = express.Router();

const userControllers = require("../controllers/user-controller")

const auth = require("../auth");

const {verify, verifyAdmin} = auth;

router.post('/register', userControllers.registerUser);

router.post('/login', userControllers.loginUser)

router.put('/updToClient/:id', userControllers.updToClient)




module.exports = router;