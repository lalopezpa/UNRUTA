import express from 'express'

//routes
import helloRoute from './routes/hello.route'
import users from './routes/user.route'
import login from './routes/login.route'
import register from './routes/register.route'
import menu from './routes/menu.route'
import sector from './routes/sector.route'
import route from './routes/route.route'
import neighborhood from './routes/neighborhood.route'
import registerRoute from './routes/registerRoute.route'

//dotenv
import dotenv from "dotenv"
import "./db/db"

dotenv.config()

const app = express()
//middleware que transforma  la req.body a un objeto json
app.use(express.json()) 
//middleware
//app.use(express.static("public"))
//app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT ||3000


app.use('/',helloRoute)
app.use('/users',users)
app.use('/login',login)
app.use('/register',register)
app.use('/menu',menu)
app.use('/sector',sector)
app.use('/neighborhood',neighborhood)
app.use('/route',route)
app.use('/registerRoute',registerRoute)


app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})


// app.post("/formulario", (req, res) => {
//     console.log(req.body) // undefined
//     res.send('enviado')
// })



