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
	/*
	propertyDetails:
	{
		type: String
	}

	To make it simpler, all details may be included in a single string


	*/
	propertyDetails:
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
	},
	/*
	features:
	{
		type: String
	}

	To make it simpler, all features may be included in a single string

	*/
	features:
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
	},
	available:
	{
		type: String,
		required: [true, "Slot availability is required"]
		/*
	Default is "1" for townhouse-type since each model has one establishment
	Number of available units available for condominium-type
	Number of available rooms available for hotel-type
	Number of available leasing units for tower-type
		*/
	},
	isActive:
	{
		type: Boolean
		//Status of unit for sale to public
	},
	modified:
	{
		type: String
		//Displays when was the property info has been updated
	},
	remarks:
	{
		type: String

	}



})










module.exports = mongoose.model("property", propertyData);