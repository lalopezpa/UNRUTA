import { Request, Response } from "express";

const readRoutes = async (_req: Request, res: Response) => {
	const routes = [
		{
			conductor: "Fulanito peres",
			car: "vgjhj",
			time: "23:44",
			places: "2",
			price: "2.993",
		},
		{
			conductor: "Fjsjsd peres",
			car: "vgdvdv",
			time: "35:44",
			places: "7",
			price: "2.223",
		},
		{
			conductor: "Fulanito peres",
			car: "vgjhj",
			time: "23:44",
			places: "5",
			price: "2.993",
		},
	];
	res.render("route", { routes: routes });
};

const createRoutes = async (_req: Request, res: Response) => {
    

};

export default {
	readRoutes,
	createRoutes,
};
