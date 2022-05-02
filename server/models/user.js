const mongoose = require('mongoose');

let userData = new mongoose.Schema({

	firstName:{
		type: String,
		required: [true, "First Name required."]
	},
	lastName:{
		type: String,
		required: [true, "Last Name required."]
	},
	email:{
		type: String,
		required: [true, "Email address required."]
	},
	password: {
		type: String,
		required: [true, "Password is required"]
		/*
		8-characters/alphanumeric (default)
		No special characters (optional/additional)
		*/
	},
	contactNo: {
		type: String,
		required: [true, "Contact Number is required"]
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	position: {
		type: String
		/*Client/Admin-Agent/Admin-MktDept/Admin-(etc)*/
	}
})

/*
1. All default users are Admin.

2. ONLY Admin can create new Users for clients, changing the isAdmin valuews to false. Credentials will be given via email, (and a change password, which might be included in the controller soon)

3. Clients qualified for Users Account creation are for clients of Property Acquisition/Leasing/ (Clients of hotel reservations/ halls reservations might also be included)

4. Purpose of Client Account Creation:
-User Details
-User Transactions
-property/company updates (such as For Leasing: Operations hours, For Property/Condominium: Updates on significant events (maintenance, announcements, other events which may affect the residence))


*/


module.exports = mongoose.model("user", userData)
