import { Router } from 'express'
import { Role } from './entities/role'

const rolesRouter = Router()

const roles = []

rolesRouter.post('/', (req, res) => {
  const { nome } = req.body

  const role = new Role()

  Object.assign(role, {
    nome,
    created_at: new Date(),
  })

  roles.push(role)

  return res.status(201).json(role)
})

export { rolesRouter }
