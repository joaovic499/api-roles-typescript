import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'

const rolesRouter = Router()

const roles = []

rolesRouter.post('/', (req, res) => {
  const { nome } = req.body
  const role = {
    id: uuidv4(),
    nome,
    created_at: new Date(),
  }

  roles.push(role)

  return res.status(201).json(role)
})

export { rolesRouter }
