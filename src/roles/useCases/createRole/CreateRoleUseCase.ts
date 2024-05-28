import { Role } from '@roles/entities/role';
import { RolesRepository } from '@roles/repositories/RolesRepository';
import { AppError } from '@shared/errors/AppError';

type CreateRoleDTO = {
  nome: string
}

export class CreateRoleUseCase {
constructor(private rolesRepository: RolesRepository) {}

  execute({ nome }: CreateRoleDTO): Role {
    const roleExistente = this.rolesRepository.findByName(nome)
    if (roleExistente) {
      throw new AppError('Role Ja existente')
    }

    return this.rolesRepository.create({ nome })
  }
}
