const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const con = await mongoose.connect("mongodb://localhost:27017/loginDB");
		console.log("Mongo DB connection successfully");
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;
