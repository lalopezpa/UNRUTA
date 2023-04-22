import express from 'express'
import {readUsers,findById,addUser} from '../controllers/user.controller'

const router = express.Router()

router.get('/',readUsers)

router.get('/:id',findById)

router.post('/',addUser)

export default router