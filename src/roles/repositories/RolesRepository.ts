// eslint-disable-next-line prettier/prettier
import { Role } from "@roles/entities/role"

type CreateRoleDTO = {
  nome: string
}

export class RolesRepository {
  private roles: Role[]

  constructor() {
    this.roles = []
  }

  create({ nome }: CreateRoleDTO) {
    const role = new Role()
    Object.assign(role, {
      nome,
      create_at: new Date(),
    })

    this.roles.push(role)
    return role
  }

  findAll(): Role[] {
    return this.roles
  }
}
