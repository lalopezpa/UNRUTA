import express, { Request, Response } from 'express'
import users from './routes/user.route'
import login from './routes/login.route'

const app = express()
//middleware que transforma  la req.body a un objeto json
app.use(express.json()) 
//middleware
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));

const port = 3000

app.get('/', (_req: Request,res: Response) =>{
    console.log('Esta entrando al puerto!')
    res.send("Entro!")
})

app.use('/users',users)
app.use('/login',login)
// app.use('/register',)
// app.use('/menu',)
// app.use('/sectores',)
// app.use('/barrios',)
// app.use('/registroRuta',)


app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})


app.post("/formulario", (req, res) => {
    console.log(req.body) // undefined
    res.send('enviado')
})
