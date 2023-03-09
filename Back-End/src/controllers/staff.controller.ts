import { Request, Response } from 'express';
import { connect } from '../database';
import { Staff } from '../interface/Staff';

// Get all staffs
export async function getStaffs(req: Request, res: Response): Promise<Response> {
    const conn = await connect(); // Get a database connection
    const staffs = await conn.query('SELECT * FROM staffs'); // Query to get all staffs
    return res.json(staffs[0]); // Return the staffs
};

// Get all names and identificacion for each staffs
export async function getAllStaffNames(req: Request, res: Response): Promise<Response> {
    const conn = await connect(); // Get a database connection
    const staffs = await conn.query('SELECT nombre, numeroIdentidad FROM staffs ORDER BY numeroIdentidad ASC'); // Query to get all names and identificacions for each staffs
    return res.json(staffs[0]); // Return the names and identificacions for each staff
};

// Create a new staff
export async function createStaff(req: Request, res: Response) {
    const newStaff: Staff = req.body; // Get the new staff data from the request body
    const conn = await connect(); // Get a database connection
    await conn.query('insert into staffs set ?', [newStaff]); // Query to insert the new staff
    return res.json({
        message: 'Staff Created'
    }); // Return a success message
}

// Get a specific staff by ID
export async function getStaff(req: Request, res: Response): Promise<Response> {
    const id = req.params.staffId; // Get the staff ID from the request parameters
    const conn = await connect(); // Get a database connection
    const staffs = await conn.query('select * from staffs where id = ?', [id]); // Query to get the staff by ID
    return res.json(staffs[0]); // Return the staff
};

// Get a specific staff by numeroIdentidad
export async function getStaffByNumeroIdentidad(req: Request, res: Response): Promise<Response> {
    const numeroIdentidad = req.params.staffID; // Get the staff ID from the request parameters
    console.log(numeroIdentidad);
    const conn = await connect(); // Get a database connection
    const staffs = await conn.query('select numeroIdentidad, nombre, apellidos, area from staffs where numeroIdentidad = ?', [numeroIdentidad]); // Query to get the staff by ID
    return res.json(staffs[0]); // Return the staff
};

// Delete a specific staff by ID
export async function deleteStaff(req: Request, res: Response) {
    const id = req.params.staffId; // Get the staff ID from the request parameters
    const conn = await connect(); // Get a database connection
    await conn.query('delete from staffs where id = ?', [id]); // Query to delete the staff by ID
    return res.json({
        message: 'Staff deleted'
    }); // Return a success message
};

// Update a specific staff by ID
export async function updateStaff(req: Request, res: Response) {
    const id = req.params.staffId; // Get the staff ID from the request parameters
    const updateStaff: Staff = req.body; // Get the updated staff data from the request body
    const conn = await connect(); // Get a database connection
    await conn.query('update staffs set ? where id = ?', [updateStaff, id]); // Query to update the staff by ID
    return res.json({
        message: 'Staff updated'
    }); // Return a success message
}


