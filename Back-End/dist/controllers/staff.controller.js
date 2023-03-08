"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStaff = exports.deleteStaff = exports.getStaff = exports.createStaff = exports.getStaffs = void 0;
const database_1 = require("../database");
// Get all staffs
function getStaffs(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)(); // Get a database connection
        const staffs = yield conn.query('SELECT * FROM staffs'); // Query to get all staffs
        return res.json(staffs[0]); // Return the staffs
    });
}
exports.getStaffs = getStaffs;
;
// Create a new staff
function createStaff(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newStaff = req.body; // Get the new staff data from the request body
        const conn = yield (0, database_1.connect)(); // Get a database connection
        yield conn.query('insert into staffs set ?', [newStaff]); // Query to insert the new staff
        return res.json({
            message: 'Staff Created'
        }); // Return a success message
    });
}
exports.createStaff = createStaff;
// Get a specific staff by ID
function getStaff(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.staffId; // Get the staff ID from the request parameters
        const conn = yield (0, database_1.connect)(); // Get a database connection
        const staffs = yield conn.query('select * from staffs where id = ?', [id]); // Query to get the staff by ID
        return res.json(staffs[0]); // Return the staff
    });
}
exports.getStaff = getStaff;
;
// Delete a specific staff by ID
function deleteStaff(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.staffId; // Get the staff ID from the request parameters
        const conn = yield (0, database_1.connect)(); // Get a database connection
        yield conn.query('delete from staffs where id = ?', [id]); // Query to delete the staff by ID
        return res.json({
            message: 'Staff deleted'
        }); // Return a success message
    });
}
exports.deleteStaff = deleteStaff;
;
// Update a specific staff by ID
function updateStaff(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.staffId; // Get the staff ID from the request parameters
        const updateStaff = req.body; // Get the updated staff data from the request body
        const conn = yield (0, database_1.connect)(); // Get a database connection
        yield conn.query('update staffs set ? where id = ?', [updateStaff, id]); // Query to update the staff by ID
        return res.json({
            message: 'Staff updated'
        }); // Return a success message
    });
}
exports.updateStaff = updateStaff;
