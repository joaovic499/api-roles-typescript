import { RolesRepository } from '@roles/repositories/RolesRepository';
import { Router, response } from 'express'
import { createRolesController } from './useCases/createRole'
import { listRolesController } from './useCases/listRoles';

const rolesRouter = Router()

rolesRouter.post('/', (req, res) => {
  return createRolesController.handle(req, res)
})

rolesRouter.get('/', (req, res) => {

  return listRolesController.handle(req, res)
})

export { rolesRouter }
