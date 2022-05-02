const Property = require('../models/property');

const User = require('../models/user');

const Acq = require('../models/acquisition')

const newAcq = (req, res) => {

	Property.findOne({_id: req.params.id})
	.then(acqResult => {
	
	let acqPropName = acqResult.propertyName;
	let acqPropPrice = acqResult.propertyDetails.price;
	let balance = acqPropPrice-req.body.transDetails.payment

	let nd = new Date()

	let newAcq = new Acq ({
		clientId: req.user.id,
		clientName: req.user.username,
		clientEmail: req.user.email,
		acqPropertyName: acqPropName,
		acqPropertyId: req.params.id,
		personInCharge: req.body.personInCharge,
		remarks: req.body.remarks,
		transDetails: {
			paymentType: req.body.transDetails.paymentType,
			bankDetails: req.body.transDetails.bankDetails,
			paymentInfo: req.body.transDetails.paymentInfo,
			payment: req.body.transDetails.payment,
			balance: balance,
			status: (balance > 0)?
			"Partial Payment"
			:
			"Payment Completed",
			transDate: nd
		},
		paymentHistory: [{payment: req.body.transDetails.payment}] 
	
		
	})
	console.log(newAcq)
	newAcq.save()
	.then(result => res.send(result))
	.catch(error => res.send(error))

	})
	.catch(error => res.send(error))


}

const updateAcq = (req, res) => {
	let nd = new Date()

	let updates = {
		remarks: (req.body.remarks == undefined)?
		`Modified on ${nd}`
		:
		req.body.remarks + " | "    + `Modified on ${nd}`,
		/*transDetails: {
			paymentType: req.body.transDetails.paymentType,
			bankDetails: req.body.transDetails.bankDetails,
			paymentInfo: req.body.transDetails.paymentInfo,
			transDate: nd
		}*/
	}
	Acq.findByIdAndUpdate(req.params.id, updates, {new:true})
	.then(updatedAcq => res.send(updatedAcq))
	.catch(error => res.send(error))

}


const updatePaymentAcq = async (req, res) => {
	console.log(req.body)
	let transUpdated = await Acq.findOne({_id: req.params.id})
	.then(acqResult => {
	console.log(acqResult + "con1a")
	let oldBalance = acqResult.transDetails.balance;
	console.log(oldBalance)
	let pay = req.body.transDetails.payment;
	console.log(pay)
	let balance = oldBalance-pay
	console.log(balance)
	/*let nd = new Date()*/

	let updates = {
		/*remarks: (req.body.remarks == undefined)?
		`Modified on ${nd}`
		:
		req.body.remarks + " | "    + `Modified on ${nd}`,*/
		transDetails: {
			paymentType: req.body.transDetails.paymentType,
			bankDetails: req.body.transDetails.bankDetails,
			paymentInfo: req.body.transDetails.paymentInfo,
			payment: req.body.transDetails.payment,
			balance: balance,
			status: (balance > 0)?
			"Partial Payment"
			:
			"Payment Completed"
		}
	}
console.log(updates + "updates")
	//const {transDetails} = updates
	Acq.findByIdAndUpdate(req.params.id, updates, {new:true})
	.then(updatedAcq => {
			console.log(updatedAcq + "con1.0")
			return true
	})
	.catch(error => console.log(error))

	})
	.catch(error => console.log(error))

	let paymentUpdated = await Acq.findOne({_id: req.params.id})
	.then(acqResult => {
		console.log(acqResult + "con2")
		acqResult.paymentHistory.unshift({payment: req.body.transDetails.payment})
		return acqResult.save()
		.then(newAcq => res.send(newAcq))
		.catch(error => error.message)
	})
	.catch(error => res.send(error))

	/*if(paymentUpdated&&transUpdated){
		return res.send({message: "Payment Updated"})
	}*/

	
}









module.exports = {
	newAcq,
	updateAcq,
	updatePaymentAcq
};





