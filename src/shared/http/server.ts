import express from 'express'
import 'express-async-errors'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  return res.json({message: 'Olá dev'})
})

app.listen(3000, () => {
  console.log('Server aberta na porta 3000')
})
