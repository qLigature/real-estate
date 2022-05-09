const jwt = require('jsonwebtoken');
require('dotenv').config();



const { ACCESS_TOKEN_SECRET, DB_CONNECTION } = process.env;

module.exports.createToken = (user) => {
	const data = {
		id: user._id,
		email: user.email,
		username: user.firstName + " " + user.lastName,
		isAdmin: user.isAdmin
	}
return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET)
}

module.exports.verify = (req, res, next) => {

	let token = req.headers.authorization
	
	if(typeof token === "undefined"){
		return res.send({auth: "Failed. No Token Found"})
	} else {
		token = token.slice(7, token.length)
		
		jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
			if(err){
				return res.send({
					auth: "Failed",
					message: err.message
				})
			} else {
				req.user = decodedToken;
				next()
			}
		})
	}
};


module.exports.verifyAdmin = (req, res, next) => {

	if (req.user.isAdmin){
		next()
	} else {
		return res.send({
			auth: "Failed",
			message: "Forbidden Action"
		})
	}

}