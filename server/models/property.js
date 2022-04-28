const mongoose = require('mongoose');

let propertyData = new mongoose.Schema({
	propertyName:{
		type: String,
		required: [true, "Property Name is required"]
	},
	propertyLoc:{
		type: String,
		required: [true, "Property Location is required"]
		/*
		City, Region, (plus at least one near Landmark/optional)
		*/
	},
	propertyType:{
		type: String,
		required: [true, "Property Type is required"]
		/*Hotel/Condominium/TownHouse/Tower*/
	},
	propertyDetails:[
	{
		lotArea:{
			type: String,
			required: [true, "Lot Area is required"]
			/*Units in sqm*/
		},
		storey:{
			type: String,
			required: [true, "Storey Type is required"]
			/*2-storey/single/joint/others*/
		},
		price:{
			type: Number
			/*
			type: String
			DownPayment Price displayed
			Full payment price displayed
			Year and Payment  Plan
			*/
		}
	}
	],
	features:[
	{
		bedroom:{
			type: String
			//type: Number
		},
		toiletbath:{
			type: String
			//type: Number
		},
		livingroom:{
			type: String
			//type: Number
		},
		dining:{
			type: String
			//type: Number
		},
		garage:{
			type: String
			//type: Number
		}
	}
	]



})










module.exports = mongoose.model("property", propertyData);