"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the necessary modules and classes for the router
const express_1 = require("express");
// Create a new instance of the Router class
const router = (0, express_1.Router)();
// Import the controller functions for the router
const staff_controller_1 = require("../controllers/staff.controller");
// Define the routes for the router using the HTTP verbs and the controller functions
router.route('/staff-form')
    .get(staff_controller_1.getStaffs)
    .post(staff_controller_1.createStaff);
router.route('/:staffId')
    .get(staff_controller_1.getStaff)
    .delete(staff_controller_1.deleteStaff)
    .put(staff_controller_1.updateStaff);
// Export the router as the default export of the module
exports.default = router;
