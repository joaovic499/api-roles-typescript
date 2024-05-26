import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
  throw new Error('Acesso Negado')
  return res.json({ message: 'Olá dev' })
})

export { routes }
