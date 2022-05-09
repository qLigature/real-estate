const Property = require("../models/property");

const auth = require("../auth");

module.exports.createPrp = (req, res) => {

	//console.log(req.body);

	let newProperty = new Property({
	
	propertyName: req.body.propertyName,
	propertyLoc: req.body.propertyLoc,
	propertyType: req.body.propertyType,
	propertyDetails: 
	{
		lotArea: req.body.propertyDetails.lotArea,
		storey: req.body.propertyDetails.storey,
		price: req.body.propertyDetails.price
	},
	features: 
	{
		bedroom: req.body.features.bedroom,
		toiletbath: req.body.features.toiletbath,
		livingroom: req.body.features.livingroom,
		dining: req.body.features.dining,
		garage: req.body.features.garage
	},
	available: req.body.available,
	isActive: req.body.isActive,
	remarks: req.body.remarks
	})

	newProperty.save()
	.then(property => {
		console.log(property)
		//return true
		return res.send(property)
	})
	.catch(error => {
		console.log(error)
		//return false
		return res.send(error)
	} )
	
};

module.exports.createLeasePrp = (req, res) => {

	//console.log(req.body);

	let newLsPrp = new Property({
	
	propertyName: req.body.propertyName,
	propertyLoc: req.body.propertyLoc,
	propertyType: req.body.propertyType,
	propertyDetails: 
	{
		lotArea: req.body.propertyDetails.lotArea,
		storey: req.body.propertyDetails.storey,
		price: req.body.propertyDetails.price
	},
	available: req.body.available,
	isActive: req.body.isActive,
	remarks: req.body.remarks
	})

	newLsPrp.save()
	.then(property => {
		console.log(property)
		//return true
		return res.send(property)
	})
	.catch(error => {
		console.log(error)
		//return false
		return res.send(error)
	} )
	
};

module.exports.editPrp = (req, res) => {

	let nd = new Date()
	let wk = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"]

	let updates = {
	/*propertyName: req.body.propertyName,
	propertyLoc: req.body.propertyLoc,
	propertyType: req.body.propertyType,
	propertyDetails: [
	{
		lotArea: req.body.propertyDetails[0].lotArea,
		storey: req.body.propertyDetails[0].storey,
		price: req.body.propertyDetails[0].price
	}
	],
	features: [
	{
		bedroom: req.body.features[0].bedroom,
		toiletbath: req.body.features[0].toiletbath,
		livingroom: req.body.features[0].livingroom,
		dining: req.body.features[0].dining,
		garage: req.body.features[0].garage
	}
	],*/
	propertyDetails:
	{
		lotArea: req.body.propertyDetails.lotArea,
		storey: req.body.propertyDetails.storey,
		price: req.body.propertyDetails.price
	},
	available: req.body.available,
	isActive: req.body.isActive,
	modified: `${wk[nd.getDay()]} ${nd.getHours()-12}:${nd.getMinutes()} ${
		(nd.getHours() >= 12)? "PM" : "AM"
	}`,
	remarks: req.body.remarks
	}
	

	Property.findByIdAndUpdate(req.params.id, updates, {new:true})
	.then(result => res.send(result))
	.catch(error => res.send(error))
};

module.exports.getAllPrp = (req, res) => {

	Property.find({})
	.then(result => res.send(result))
	.catch(error => res.send(error))
}

module.exports.getPropertyByNameParams = (req, res) => {

	Property.find({"propertyName" : {$regex: req.params.id, $options: '$i'}})
	.then(result => res.send(result))
	.catch(error => res.send(error))
}

module.exports.getPropertyByNameReqBody = (req, res) => {

	Property.find({"propertyName" : {$regex: req.body.propertyName, $options: '$i'} })
	.then(result => res.send(result))
	.catch(error => res.send(error))
}

module.exports.getPropertyById = (req,res) => {
	Property.find({"_id" : req.params.id})
	.then(result => res.send(result))
	.catch(error => res.send(error))
}

module.exports.getPrpCategoryHotel = (req,res) => {
	Property.find({"propertyType" : {$regex: "hotel", $options: '$i'}})
	.then(result => res.send(result))
	.catch(error => res.send(error))
}

module.exports.getPrpCategoryTownhouse = (req,res) => {
	Property.find({"propertyType" : {$regex: "townhouse", $options: '$i'}})
	.then(result => res.send(result))
	.catch(error => res.send(error))
}

module.exports.getPrpCategoryCondominium = (req,res) => {
	Property.find({"propertyType" : {$regex: "condominium", $options: '$i'}})
	.then(result => res.send(result))
	.catch(error => res.send(error))
}

module.exports.getPrpCategoryTower = (req,res) => {
	Property.find({"propertyType" : {$regex: "tower", $options: '$i'}})
	.then(result => res.send(result))
	.catch(error => res.send(error))
}

module.exports.cityManila = (req,res) => {
	Property.find({"propertyLoc" : {$regex: "manila", $options: '$i'}})
	.then(result => res.send(result))
	.catch(error => res.send(error))
}

module.exports.cityQC = (req,res) => {
	Property.find({"propertyLoc" : {$regex: "quezon", $options: '$i'}})
	.then(result => res.send(result))
	.catch(error => res.send(error))
}

module.exports.propertyNearMe = (req,res) => {
	Property.find({"propertyLoc" : {$regex: req.body.propertyLoc, $options: '$i'}})
	.then(result => res.send(result))
	.catch(error => res.send(error))
}