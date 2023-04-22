import mongoose, { Document, Model } from "mongoose";
import { tipo, user } from "../types";

interface UserDocument extends user, Document {}

const CorreoUNAL = /^([\w-]+)@unal.edu.co$/;

const userSchema = new mongoose.Schema<UserDocument>({
	user_id: { type: Number, required: true, unique: true },
	nombre: { type: String, required: true },
	correo: { type: String, required: true, unique: true, match: CorreoUNAL },
	contrasena: { type: String, required: true },
	telefono: { type: Number, required: true },
	tipo: { type: String, required: true, enum: Object.values(tipo) },
});

const UserModel: Model<UserDocument> = mongoose.model<UserDocument>(
	"user",
	userSchema,
);

export default UserModel;
