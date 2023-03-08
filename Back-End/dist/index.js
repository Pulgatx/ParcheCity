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
// Import the App class from the app module
const app_1 = require("./app");
// Define an asynchronous function called "main"
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create a new instance of the App class with port number 3000
        const app = new app_1.App(3000);
        // Start the application by calling the "listen" method of the App class
        yield app.listen();
    });
}
// Call the main function to start the application
main();
// aqui tienes tu imagen bro
//https://i.pinimg.com/564x/75/43/89/7543892e9a3859f4dcbce140bc6b441b.jpg
