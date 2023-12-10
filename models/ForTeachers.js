const mongoose = require('mongoose');


const forTeachersSchema = new mongoose.Schema({
	ftSubHead: {
		type: String,
		required: [true, 'For Teachers Sub Heading is Required']
	}, 
	ftBelowSubHead: {
		type: String,
		required: [true, 'For Teachers Below Sub Heading is Required']
	},
	ftBenefitsSentence: {
		type: String,
		required: [true, 'For Teachers Benefits Sentence is Required']
	},
	ftBenefitsImage: {
		type: String,
		required: [true, 'For Teachers Image Link is Required']
	}
})

module.exports = mongoose.model('ForTeachers', forTeachersSchema);