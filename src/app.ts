import { envs } from "./config";
import { MongoDatabase } from "./data/mongodb";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

// Funcion anonima autoinvocada
(()=>{
    main()
})()

async function main(){
    // Conexion bd
    await MongoDatabase.connect({
        dbName: envs.MONGO_DB_NAME,
        mongoUrl:envs.MONGO_URL
    })
    // Server
    new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    }).start()

}