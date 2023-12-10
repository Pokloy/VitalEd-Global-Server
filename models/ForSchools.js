const mongoose = require('mongoose');


const forSchoolsSchema = new mongoose.Schema({
	fsSubHead: {
		type: String,
		required: [true, 'For Schools Sub Heading is Required']
	}, 
	fsBenefitsImage: {
		type: String,
		required: [true, 'For Schools Image Link is Required']
	},
	fsBenefitsSentence: {
		type: String,
		required: [true, 'For Schools Benefits Sentence is Required']
	}

})

module.exports = mongoose.model('ForSchools', forSchoolsSchema);