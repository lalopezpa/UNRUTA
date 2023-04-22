import express  from 'express'
//import * as UNRutaService from '../services/UNRuta.service'
//import { STATUS_CODES } from '../utils/constants'


const router = express.Router()

router.get('/',(_req,res)=>{
    res.send('menu')
    
})

export default router