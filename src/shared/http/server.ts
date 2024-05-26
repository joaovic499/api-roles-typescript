import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'
import { AppError } from '@shared/errors/AppError'

const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)

app.use((error: Error, _req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }
  console.log(error)

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server aberta no ${process.env.PORT}`)
})
