const bcrypt = require("bcrypt");

const User = require("../models/user");

const auth = require("../auth");

module.exports.checkEmailExists = ( req, res) => {
	console.log(req.body);
	User.findOne({email: req.body.email})
	.then(result => {
		if(result !== null){
			return false/*res.send(`The email ${req.body.email} found and already registered. Please use new email`)*/
		} else {
			return true/*res.send(`Email ${req.body.email} is available. You can now proceed to User Registration Page`)*/

		}
	})
	.catch(error => res.send(error))
};


module.exports.registerUser = (req, res) => {

	console.log(req.body);

	const newPswd = bcrypt.hashSync(req.body.password, 5)

	let newUser = new User({
	
	firstName: req.body.firstName,
	lastName: req.body.lastName,
	email: req.body.email,
	contactNo: req.body.contactNo,
	password: newPswd,
	position: req.body.position
	})

	newUser.save()
	.then(user => res.send(user))
	/*
	.then(user => res.send(`Successfully registered`))
	*/
	.catch(error => res.send(error))
	

};