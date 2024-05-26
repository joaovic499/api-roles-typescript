import { Router } from 'express'
import { CreateRoleController } from './useCases/createRole/CreateRoleController'
import { RolesRepository } from './repositories/RolesRepository'

const rolesRouter = Router()

const createRolesController = new CreateRoleController()
const rolesRepository = new RolesRepository()

rolesRouter.post('/', (req, res) => {
  return createRolesController.handle(req, res)
})

rolesRouter.get('/', (req, res) => {
  const roles = rolesRepository.findAll()

  return res.json(roles)
})

export { rolesRouter }
