const user_model = require("../database/model");
const { use } = require("../router/router");
exports.create = async (req, res) => {
	try {
		if (!req.body) {
			res.send({
				msg: "Request body could not empty",
			});
		}

		const userFindOne = await user_model.findOne({
			user_email: req.body.user_email,
		});
		if (userFindOne) {
			res.send({
				msg: "User Already registered with this Email ID!!",
			});
		} else {
			const user = new user_model({
				user_fname: req.body.user_fname,
				user_lname: req.body.user_lname,
				user_email: req.body.user_email,
				user_password: req.body.user_password,
				user_cpassword: req.body.user_cpassword,
			});

			const save = await user.save();
			console.log(save);
			res.send({
				data: save,
				msg: "User Registered successfuly !",
			});
		}
	} catch (error) {
		res.status(500).send({
			msg: error.message || "User could not be Registered",
		});
	}
};
exports.getAll = async (req, res) => {
	try {
		const getData = await user_model.find();
		if (getData) {
			res.send({
				data: getData,
				msg: "Users Retrieved successfully",
			});
		} else {
			res.send({
				msg: "Users not found..",
			});
		}
	} catch (error) {
		res.status(500).send({
			msg: error.message || "Could not fetch Users...",
		});
	}
};

exports.getOne = async (req, res) => {
	try {
		const id = req.params.id;
		const getone = await user_model.findById(id);
		if (getone) {
			res.send({
				data: getone,
				msg: "User Retrieved successfully",
			});
		} else {
			res.send({
				msg: "User not found..",
			});
		}
	} catch (error) {
		res.status(500).send({
			msg: error.message || "Could not fetch User...",
		});
	}
};

exports.update = async (req, res) => {
	try {
		const id = req.params.id;
		const updateUser = await user_model.findByIdAndUpdate(id, req.body);
		if (updateUser) {
			res.send({
				data: updateUser,
				msg: "User Updated successfully",
			});
		} else {
			res.send({
				msg: "User could not Update..",
			});
		}
	} catch (error) {
		res.status(500).send({
			msg: error.message || "Could not Update User...",
		});
	}
};

exports.delete = async (req, res) => {
	try {
		const id = req.params.id;
		const deleteUser = await user_model.findByIdAndDelete(id);
		if (deleteUser) {
			res.send({
				data: deleteUser,
				msg: "User deleted successfully",
			});
		} else {
			res.send({
				msg: "User could not Deleted...",
			});
		}
	} catch (error) {
		res.status(500).send({
			msg: error.message || "Could not Delete User...",
		});
	}
};

exports.login = async (req, res) => {
	try {
		const loginUser = await user_model.findOne({
			user_email: req.body.user_email,
		});
		if (loginUser) {
			if (loginUser.user_password === req.body.user_password) {
				res.send({
					data: loginUser,
					msg: "Login Successfully !",
				});
			} else {
				res.send({
					msg: "Wrong Password",
				});
			}
		} else {
			res.send({
				msg: "No Data Found",
			});
		}
	} catch (error) {
		res.status(500).send({
			msg: error.message || "Could not find User...",
		});
	}
};
