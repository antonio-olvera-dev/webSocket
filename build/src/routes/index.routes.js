"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRoutes = void 0;
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.router.get('/', index_controller_1.indexConrtoller.index);
    }
}
exports.indexRoutes = new IndexRoutes();
