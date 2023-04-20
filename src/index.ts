import express from 'express'
import usuarios from './routes/UNRutaUsuariosRoute'

const app = express()
app.use(express.json()) //middleware que transforma  la req.body a un objeto json

const port = 3000

app.get('/', (_req,res) =>{
    console.log('Esta entrando al puerto!')
    res.send("Entro!")
})

app.use('/usuarios',usuarios)

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
});
