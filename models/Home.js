const mongoose = require('mongoose');


const homeSchema = new mongoose.Schema({
	homeHead:{
		type:String,
		required:[true, 'Home Landing Heading Required']
	},
	missionSubHead: {
		type:String,
		required:[true, 'Mission Sub Heading Required']
	},
	isActive: {
		type:Boolean,
		required: [true, 'Home Text Active']
	}
})

module.exports = mongoose.model('Home', homeSchema);