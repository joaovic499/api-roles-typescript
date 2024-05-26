import { RolesRepository } from './repositories/RolesRepository'
import { Router } from 'express'

const rolesRouter = Router()

const rolesRepository = new RolesRepository()

rolesRouter.post('/', (req, res) => {
  const { nome } = req.body

  const role = rolesRepository.create({ nome })

  return res.status(201).json(role)
})

rolesRouter.get('/', (req, res) => {
  const roles = rolesRepository.findAll()

  return res.json(roles)
})

export { rolesRouter }
