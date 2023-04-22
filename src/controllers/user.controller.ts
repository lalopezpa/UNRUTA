import { Request, Response } from "express";
import * as UNRutaService from "../services/UNRuta.service";
import { STATUS_CODES } from "../utils/constants";
import toNewUser from "../utils/utils";

export const readUsers = async (_req: Request, res: Response) => {
	res.send(UNRutaService.getEntriesWithoutSensitiveInfo());
};

export const findById = async (req: Request, res: Response) => {
	const usuario = UNRutaService.findById(+req.params.id); //find by id
	return usuario != null ? res.send(usuario) : res.json(STATUS_CODES.NOT_FOUND);
};

export const addUser = async (req: Request, res: Response) => {
	try {
		const newUser = toNewUser(req.body);
		const userAdded = UNRutaService.addUser(newUser);
		res.json(userAdded);
	} catch (e) {
		res.json(STATUS_CODES.BAD_REQUEST);
	}
};

export default {
	readUsers,
	findById,
	addUser,
};
