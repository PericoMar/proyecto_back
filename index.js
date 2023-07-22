
require('dotenv').config()
const express = require('express') /*Requiere la libreria,  hay que instalarla (yarn add express) se añadira a 
el package.json*/
const app = express()
const port = process.env.PORT   

app.use(express.static("public"))

// Configurar RUTAS
app.get('/', function(req, res) {
  res.send('Hello World!')
})

// Poner a escuchar la app en un puerto
app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})

