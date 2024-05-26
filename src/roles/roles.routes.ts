import { RolesRepository } from './repositories/RolesRepository'
import { Router } from 'express'

const rolesRouter = Router()

const rolesRepository = new RolesRepository()

rolesRouter.post('/', (req, res) => {
  const { nome } = req.body
  const roleExistente = rolesRepository.findByName(nome)
  if (roleExistente) {
    return res.status(400).json({ error: 'Role ja existe' })
  }

  const role = rolesRepository.create({ nome })

  return res.status(201).json(role)
})

rolesRouter.get('/', (req, res) => {
  const roles = rolesRepository.findAll()

  return res.json(roles)
})

export { rolesRouter }
