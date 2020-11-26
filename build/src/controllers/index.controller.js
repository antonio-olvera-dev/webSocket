"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexConrtoller = void 0;
const path_1 = __importDefault(require("path"));
class IndexConrtoller {
    constructor() { }
    async index(req, res) {
        try {
            // res.send('d');
            //poner src para que funcione
            res.sendFile(path_1.default.resolve('./views/layouts/main.html'));
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.indexConrtoller = new IndexConrtoller();
