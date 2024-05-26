import { rolesRouter } from '@roles/roles.routes'
import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Olá dev' })
})

routes.use('/roles', rolesRouter)

export { routes }
