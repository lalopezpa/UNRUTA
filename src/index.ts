import express from "express";
import path from "path";
//motor de plantilla
import { create } from "express-handlebars";
//dotenv
import dotenv from "dotenv";
import "./db/db";
dotenv.config();

//routes
//import helloRoute from "./routes/hello.route";
import users from "./routes/user.route";
import login from "./routes/login.route";
import register from "./routes/register.route";
import menu from "./routes/menu.route";
import sector from "./routes/sector.route";
import route from "./routes/route.route";
import neighborhood from "./routes/neighborhood.route";
import registerRoute from "./routes/registerRoute.route";

const app = express();

//middleware que transforma  la req.body a un objeto json
//app.use(express.json())

const port = process.env.PORT || 3000;

const hbs = create({
	extname: ".hbs",
	defaultLayout: "main",
	partialsDir: ["views/components"],
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "../views"));

//app.use(express.static("public"));
//middleware

app.use("/", menu);
app.use("/users", users);
app.use("/login", login);
app.use("/register", register);
//app.use("/menu", menu);
app.use("/sector", sector);
app.use("/neighborhood", neighborhood);
app.use("/route", route);
app.use("/registerRoute", registerRoute);

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});

// app.post("/formulario", (req, res) => {
//     console.log(req.body) // undefined
//     res.send('enviado')
// })
