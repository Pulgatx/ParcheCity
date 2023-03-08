"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the necessary modules and classes for the router
const express_1 = require("express");
// Create a new instance of the Router class
const router = (0, express_1.Router)();
// Import the controller function for the router
const index_controller_1 = require("../controllers/index.controller");
// Define the route for the router using the HTTP verb and the controller function
router.route('/')
    .get(index_controller_1.indexWelcome);
// Export the router as the default export of the module
exports.default = router;
