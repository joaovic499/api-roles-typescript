import { ListRolesController } from './ListRolesController';
import { ListRolesUseCase } from './ListRolesUseCase';
import { RolesRepository } from '@roles/repositories/RolesRepository';

const rolesRepository = new RolesRepository()
const listRolesUseCase = new ListRolesUseCase(rolesRepository)
export const listRolesController = new ListRolesController(listRolesUseCase)
