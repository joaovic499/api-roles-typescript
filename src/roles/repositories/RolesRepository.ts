// eslint-disable-next-line prettier/prettier
import { Role } from "@roles/entities/role"

type CreateRoleDTO = {
  nome: string
}

export class RolesRepository {
  private roles: Role[]
  private static INSTANCE: RolesRepository

  private constructor() {
    this.roles = []
  }

  public static getInstance(): RolesRepository {
    if (!RolesRepository.INSTANCE) {
      RolesRepository.INSTANCE = new RolesRepository()
    }

    return RolesRepository.INSTANCE
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

  findByName(nome: string): Role | undefined {
    return this.roles.find(role => role.nome === nome)
  }
}
