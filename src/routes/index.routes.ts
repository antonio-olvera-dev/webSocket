import { Router} from "express";

import { indexConrtoller } from "../controllers/index.controller";
class IndexRoutes {
    router: Router = Router();
    constructor() {

       
        
        this.router.get('/', indexConrtoller.index);

    }
}


export const indexRoutes = new IndexRoutes();