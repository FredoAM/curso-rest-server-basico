
const express = require('express')
var cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middleware();

        //Rutas de mi aplicacion
        this.routes();
    }

    middleware(){

        //CORS
        this.app.use(cors());
        
        //Lectura y parseo del body
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use('/api/usuarios', require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto', this.port)
        })
    }

}

module.exports = Server;



