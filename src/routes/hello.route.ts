import express, { Request, Response }  from "express";


//import helloController from '../controllers/hello.controller'
//import asyncErrorMiddleware from '../middlewares/error.middleware'

const router = express.Router();

//router.get("/", asyncErrorMiddleware(helloController.hello));
router.get('/', (_req: Request,res: Response) =>{
    console.log('Esta entrando al puerto!')
    res.send("Entro prueba!")
})
export default router;