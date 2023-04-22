import mongoose, { Schema, Document } from "mongoose";

export interface RouteInterface extends Document {
	conductor: string;
	car: string;
	time: string;
	places: number;
	price: number;
}

const routeSchema: Schema = new Schema({
	conductor: {
		type: String,
		unique: true,
		required: true,
	},
	car: {
		type: String,
		unique: true,
		required: true,
        match: [/^[A-Z]{3}\d{3}$/, 'El valor de {PATH} debe ser una cadena de 3 letras mayúsculas seguidas de 3 números.'],
	},
	time: {
		type: String,
		required: true,
		match: [/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,'NO es un formato de hora correcto'],
	},
	places: {
		type: Number,
		required: true,
		min: 1,
		max: 4,
		default: () => 4,
	},
	price: {
		type: Number,
		required: true,
		default: () => 3000,
	},
});

export default mongoose.model<RouteInterface>("Route", routeSchema);
