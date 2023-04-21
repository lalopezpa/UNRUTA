import { NextFunction, Request, Response } from "express"

import { ServerError } from '../errors/server.error'

export default (
	err: ServerError,
	_req: Request,
	res: Response,
	_next: NextFunction,
) => {
	res
		.json({
			error: err.message,
		})
		.status(err.code);
};