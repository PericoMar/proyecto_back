require('dotenv').config()
const http = require("http") /* module.exports de HTTP que es una libreria de NodeJS que necesitamos
                            Usamos la función require para poder meterla en 
                            la constante (const) http (objeto)*/
const fs = require("fs");

// console.log({module})
// module.exports = "Exporto lo que quiero"

function requestController(req,res) { //req --> request , res --> response
    const url =  req.url;
    const method = req.method;
    console.log({url , method})

    if(method === "GET" && url ==="/"){
        res.setHeader("Content-type", "text/html; charset=utf-8")
        fs.readFile("./public/index.html", function(err, file){
            if(err){
                console.log("Hubo un ERROR")
            }
            res.write(file)
            res.end()
        })
        
    } else {
        res.setHeader("Content-type", "text/html; charset=utf-8")
        res.write("<h1>Pagina no encontrada :(</h1>")
        res.end() 
    }

    
    console.log("Recibimos una request");
}
//Cofigurar nuestro servidor    
const server = http.createServer(requestController) // Cada vez que llega una request a nuestro servidor
                                                    // createServer ejecuta nuestra funcion requestController

const PORT =  process.env.PORT

server.listen(PORT , function() {
    console.log("Aplicacion corriendo en el puerto : " + PORT)
}) // Nuestro servidor debe de "escuchar" un determinado puerto (lo pasamos por parametros)
//Para probar hacemos una peticion de red a nuestra propia maquina (localhost) y con el puerto 4000 que es el
//que hemos puesto localhost:4000








