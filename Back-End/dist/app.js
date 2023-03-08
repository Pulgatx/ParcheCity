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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
// Import the necessary modules and classes for the application
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
// Import the route handlers for the application
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const staff_routes_1 = __importDefault(require("./routes/staff.routes"));
// Define a class called "App" for the application
class App {
    // Define a constructor for the class that takes an optional port number or string as a parameter
    constructor(port) {
        this.port = port;
        // Initialize the Express application
        this.app = (0, express_1.default)();
        // add cors in server
        this.app.use((0, cors_1.default)());
        // Call the "settings" method to configure the application settings
        this.settings();
        // Call the "middlewares" method to add middleware functions to the application
        this.middlewares();
        // Call the "routes" method to add route handlers to the application
        this.routes();
    }
    // Define a method called "settings" to configure the application settings
    settings() {
        // Set the "port" setting of the application to the value of the "port" property of the class,
        // or the value of the "PORT" environment variable, or the default value of 3000
        this.app.set('port', this.port || process.env.PORT || 3000);
    }
    // Define a method called "middlewares" to add middleware functions to the application
    middlewares() {
        // Add the "morgan" middleware function with the "dev" format to log HTTP requests and responses
        this.app.use((0, morgan_1.default)('dev'));
        // Add the "express.json" middleware function to parse JSON request bodies
        this.app.use(express_1.default.json());
    }
    // Define a method called "routes" to add route handlers to the application
    routes() {
        // Add the "IndexRoutes" handler to the application
        this.app.use(index_routes_1.default);
        // Add the "StaffRoutes" handler to the application with the base path of "/"
        this.app.use('/', staff_routes_1.default);
    }
    // Define an asynchronous method called "listen" to start the application
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            // Call the "listen" method of the Express application with the port number from the "port" setting
            yield this.app.listen(this.app.get('port'));
            // Log a message to indicate that the server has started on the specified port
            console.log('Server on port', this.app.get('port'));
        });
    }
}
exports.App = App;
