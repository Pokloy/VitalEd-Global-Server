const mongoose = require('mongoose');


const aboutUsSchema = new mongoose.Schema({
	auSubHead: {
		type: String,
		required: [true, 'About Us Sub Heading is Required']
	}, 
	auForTeachers: {
		type: String,
		required: [true, 'About Us For Teachers is Required']
	},
	auForSchool: {
		type: String,
		required: [true, 'About Us For School is Required']
	}	
})

module.exports = mongoose.model('AboutUs', aboutUsSchema);