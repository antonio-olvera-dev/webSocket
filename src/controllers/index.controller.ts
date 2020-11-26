import path from "path"
import {  Request, Response } from "express";


class IndexConrtoller {
    
  constructor(){}

       
        
       async  index (req: Request, res: Response) {

            try {
              

                // res.send('d');
                //poner src para que funcione

                 res.sendFile(path.resolve('./views/layouts/main.html'));



                
               
            } catch (error) {
                console.log(error);

            }


    }
}


export const indexConrtoller = new IndexConrtoller();