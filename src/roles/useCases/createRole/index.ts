import { CreateRoleController } from './CreateRoleController';
import { CreateRoleUseCase } from './CreateRoleUseCase';
import { RolesRepository } from "@roles/repositories/RolesRepository";

const rolesRepository = RolesRepository.getInstance()
const createRoleUseCase = new CreateRoleUseCase(rolesRepository)
export const createRolesController = new CreateRoleController(createRoleUseCase)
