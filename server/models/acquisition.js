//The Acquisition Model Details will served as a copy and as a supporting documents for proof of transaction.


const mongoose = require('mongoose');

let acquisition = new mongoose.Schema({
	clientId:
	{
		type: String,
		required: [true, "Client Id is required."]
		//client account id number
	},
	clientName:
	{
		type: String,
		required: [true, "Client Name is required."]
		//client account name
	},
	clientEmail:
	{
		type: String,
		required: [true, "Client Email is required."]
		//client account email
	},
	acqPropertyName:
	{
		type: String,
		required: [true, "Acquired Property Name is required."]
		//Townhouse-type: property to be acquired/purchased
		//Condominium-type: towerName/ unit to be acquired/ unit number/ floor
		//Hotel-type: hotelName/ unit to reserved/ unit number/ floor
		//unit for Lease type: towerName/ unit to be leased/ unit location
	},
	transDetails:
	{
		type: String,
		required: [true, "Transaction details is required."]
		//Cash/Check/WireTransfer, BankName+BankBranch+BankAccNumber, Type(Full-Cash, Installment, Mortgage)
	},
	/*
	transDetails:[
	{
		paymentType:
		{
			type: String
			//Cash/Check/Wire Transfer
		},
		bankDetails:
		{
			type: String
			//"Bank Name" + "Bank Branch" + "Bank Account Number"
		},
		paymentInfo:
		{
			type: String
			// "Full Payment" + (TotalAmount Paid)
			// "Installment" + (include payment per month/semi-annual/annual planns + Number of months)
			// "Mortgage" + (include payment per month/semi-annual/annual planns + Number of months)
		},
		transDate:
		{
			type: String
			//transaction date AcqController.js, "transDate": new Date()
		}
	}]
	*/
	personInCharge:
	{
		type: String
		//Details of the Agent Name, Agent Email, Contact-Other Details/ BrokerName + Company office, person-in-charge/adminName, adminEmail, admin contact-other details
		//If direct to Company office, person-in-charge/adminName, adminEmail, admin contact-other details
	},
	remarks:
	{
		type: String
		//Any remarks from Admin in charge
	},
	transDate:
	{
		type: String
		//transaction date AcqController.js, "transDate": new Date()
	}
});

module.exports = mongoose.model("acquisition", acquisition);