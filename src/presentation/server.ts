import express, { Router } from 'express'

interface Options{
    port: number;
    routes: Router
}

export class Server{




    public readonly app = express();
    // Depedencia explicita
    private readonly port : number;
    private readonly routes : Router;

    constructor(options : Options){
        const { port = 3100 ,routes} = options;
        this.port = port
        this.routes = routes
    }

    async start(){

        //Middlewares
        // bodyparser
        this.app.use( express.json() );
        this.app.use( express.urlencoded( {extended: true} ) ); // x-www-form-urlencoded


        // Ruta principal
        this.app.use( this.routes)

        this.app.listen(this.port,()=>{
            console.log(`Server corriendo en http://localhost:${this.port}`)  
        })

    }

}