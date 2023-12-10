const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, 'Username is Required']
	}, 
	password: {
		type: String,
		required: [true, 'Password is Required']
	},
	isAdmin: {
		type: Boolean,
		default: true
	}
})

module.exports = mongoose.model('Users', userSchema);