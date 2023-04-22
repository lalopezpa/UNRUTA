import express from "express";
import  routeControllers  from "../controllers/route.controller";
//import * as UNRutaService from '../services/UNRuta.service'
//import { STATUS_CODES } from '../utils/constants'

const router = express.Router();

router.get("/", routeControllers.readRoutes);
router.post("/", routeControllers.createRoutes);

export default router;