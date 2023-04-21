import express  from 'express'
import * as UNRutaService from '../services/UNRuta.service'
import { STATUS_CODES } from '../utils/constants'
import toNewUser from '../utils/utils'

const router = express.Router()

router.get('/',(_req,res)=>{
   res.send(UNRutaService.getEntriesWithoutSensitiveInfo())
})

router.get('/:id',(req,res)=>{
   const usuario = UNRutaService.findById(+req.params.id) //find by id 
   return (usuario != null)
    ? res.send(usuario)
    : res.json(STATUS_CODES.NOT_FOUND)
})

router.post('/',(req,res)=>{
   try{
      const newUser = toNewUser(req.body)
      const userAdded = UNRutaService.addUser(newUser)
      res.json(userAdded)
   }catch(e){
      res.json(STATUS_CODES.BAD_REQUEST)
   }

})

export default router