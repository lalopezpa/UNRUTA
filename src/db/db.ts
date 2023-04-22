import mongoose from 'mongoose'


// mongoose
//   .connect(process.env.URI, {})
//   .then(() => console.log("db conectada!"))
//   .catch((e: Error) => console.log("error de conexión: " + e));

const uri = process.env.URI;

if (uri) {
  mongoose.connect(uri, {});
  console.log("Conexión a la base de datos establecida!")
} else {
  console.log("Error: URI no definida")
}
