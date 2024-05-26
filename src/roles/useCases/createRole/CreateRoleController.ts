import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppError'
import { Request, Response } from 'express'

export class CreateRoleController {
  handle(req: Request, res: Response): Response {
    const { nome } = req.body
    const rolesRepository = new RolesRepository()
    const roleExistente = rolesRepository.findByName(nome)
    if (roleExistente) {
      throw new AppError('Role ja existe')
    }

    const role = rolesRepository.create({ nome })

    return res.status(201).json(role)
  }
}
