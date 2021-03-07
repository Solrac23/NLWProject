import express from 'express'
import './database/connection'

import routes from './routes'

const app = express()

app.use(express.json()) // Essa função fala ao express a entender o que é JSON.
app.use(routes)

app.listen(3040)


//Rota = conjunto
// Recurso = index

// Método HTTP = GET, POST, PUT, DELETE

// GET = Buscar uma informação (Lista, item)
// POST = Criar uma informação
// PUT = Editar uma informação
// DELETE = Deletando uma informação

// Paramêtros = Query Params, Route Params e Body.

// Query Params: http://localhost:3333/users?search=diego Usado para filtrar e paginação.
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users (identificar um recurso)

// app.post('/users/:id', (req, res) => {
//   console.log(req.query)
//   console.log(req.params)
//   console.log(req.body)

//   return res.json({ message: 'Hello World'})
// })


// instalar yarn add typescript, para o node reconhecer typescript
// instlar yarn tsc --init para a conversão do codigo para js.
// instalar yarn add ts-node-dev para executar ts e node.

// Existem 3 formas de lidar com banco de dados no backend
// Driver Nativo, Query builders, ORM.
