const express = require("express");
const user_model = require("../database/model");
const controller = require("../controller/controller");
const router = express.Router();

//............ all API for CRUD operations

// creating/registring user API

router.post("/createUser", controller.create);
// creating/registring user API

// getting all registered users API
router.get("/getAllUsers", controller.getAll);

// getting all registered users API

//getting single User API
router.get("/getOneUser/:id", controller.getOne);

//getting single User API

// updating  users API
router.put("/updateUser/:id", controller.update);

// updating  users API

// Deleting  user API
router.delete("/deleteUser/:id", controller.delete);

// Deleting  user API

// Login API
router.post("/login", controller.login);

// Login API

module.exports = router;
