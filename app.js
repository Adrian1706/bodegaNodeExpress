import express from 'express';
import dotenv from "dotenv";
import Bodegas from "./routers/bodegas.js";
import Productos from "./routers/productos.js";

dotenv.config();

const appExpress=express();

appExpress.use(express.json());
appExpress.use("/bodegas", Bodegas);
appExpress.use("/productos", Productos);

const config=JSON.parse(process.env.SERVER_CONFIG);
appExpress.listen(config,()=>{
    console.log(`http://${config.hostname}:${config.port}`)
})