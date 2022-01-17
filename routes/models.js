const express = require("express");

// get an instance of router
const router = express.Router();
// get the controller
const modelController = require("../controllers/model");
// add the controller's functions to the router
router.post("/model", modelController.model);
// export the router
module.exports = router; // export to use in server.js
