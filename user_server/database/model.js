const mongoose = require("mongoose");

const schema = mongoose.Schema({
	user_fname: {
		type: String,
		required: true,
	},
	user_lname: {
		type: String,
		required: true,
	},
	user_email: {
		type: String,
		require: true,
		unique: true,
	},
	user_password: {
		type: String,
		required: true,
	},
	user_cpassword: {
		type: String,
		required: true,
	},
});

const user_model = mongoose.model("users", schema);

module.exports = user_model;
