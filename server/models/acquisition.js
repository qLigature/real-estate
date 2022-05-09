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
	acqPropertyId:
	{
		type: String,
		required: [true, "Acquired Property Id is required."]
	},
	acqPropertyName:
	{
		type: String,
		required: [true, "Acquired Property Name is required."]
		//Townhouse-type: property to be acquired/purchased
		//Condominium-type: towerName/ unit to be acquired/ unit number/ floor
		//Hotel-type: hotelName/ unit to reserved/ unit number/ floor
		//unit for Lease type: towerName/ unit to be leased/ unit location
		/*
		In front-end
		fetch(http://localhost:5000/acquisitions/createAcq, {
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
			Authorization:  `Bearer ${localStorage.getItem("token")}`
		},
		body: JSON.stringify({
			acqPropertyName: var-hotel + " " + var-hotel-unitNum + " " + var-hotel-flr
			or
			acqPropertyName: var-hotel
		})
		})

		*/
	},
	/*transDetails:
	{
		type: String,
		required: [true, "Transaction details is required."]
		//Cash/Check/WireTransfer, BankName+BankBranch+BankAccNumber, Type(Full-Cash, Installment, Mortgage)
	},*/
	
	transDetails:
	{
		paymentType:
		{
			type: String,
			required: [true, "Payment Type is required."]
			//Cash/Check/Wire Transfer/Electronic-Trans
		},
		bankDetails:
		{
			type: String,
			required: [true, "Bank Details is required."]
			//"Bank Name" + "Bank Branch" + "Bank Account Number"
		},
		paymentInfo:
		{
			type: String,
			required: [true, "Payment Info is required."]
			// "Full Payment" + (TotalAmount Paid)
			// "Installment" + (include payment per month/semi-annual/annual planns + Number of months)
			// "Mortgage" + (include payment per month/semi-annual/annual planns + Number of months)
		},
		payment:
		{
			type:Number
		},
		balance:{
			type: Number
		},
		status:
		{
			type: String,
			required: [true, "Payment Status is required."]
			//Acq-controller - If full payment: Status: "Payment Completed", if partial: Status: "Partially paid"
		},
		transDate:
		{
			type: String
			//transaction date AcqController.js, "transDate": new Date()
		}
	},
	
	personInCharge:
	{
		type: String,
		required: [true, "In Charge Name is required."]
		//Details of the Agent Name, Agent Email, Contact-Other Details/ BrokerName + Company office, person-in-charge/adminName, adminEmail, admin contact-other details
		//If direct to Company office, person-in-charge/adminName, adminEmail, admin contact-other details
	},
	remarks:
	{
		type: String
		//Any remarks from Admin in charge
	},
	paymentHistory:
	[{
		payment:
		{
			type: Number
		},
		payDate:
		{
			type: Date,
			default: new Date()
		}
	}]
	/*transDate:
	{
		type: String
		//transaction date AcqController.js, "transDate": new Date()
	}*/
});

module.exports = mongoose.model("acquisition", acquisition);