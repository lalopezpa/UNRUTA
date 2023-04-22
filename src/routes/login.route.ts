import express, { Request, Response } from "express";
//import * as UNRutaService from '../services/UNRuta.service'
//import { STATUS_CODES } from '../utils/constants'

const router = express.Router();

router.get("/", (_req: Request, res: Response) => {
	res.render("login", { titulo: "Página login" });
});

export default router;
