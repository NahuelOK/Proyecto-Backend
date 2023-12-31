import express from "express";
import handlebars from "express-handlebars"
import mongoose from "mongoose";
import __dirname from "./ultils.js"
import productosRouter from "./routes/productos.router.js"

const app = express();
const mongoURL= "mongodb+srv://nahuel23009:6KwNRivgNXTdFnit@myfirstdb.aozrhlt.mongodb.net/"
const mongoDBName = "proyecto-backend-2"

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views")
app.set("view engine", "handlebars");

app.get("/", (req, res) => res.render("index", {}))
app.get("/inicio", (req, res) => res.send("OK"))
app.use("/productos", productosRouter)

mongoose.connect(mongoURL, {dbName: mongoDBName})
    .then(()=>{
        console.log("DB conectado")
        app.listen(8080, ()=> console.log("Corriendo...."))
    })
    .catch(e => console.error("Error to conect"))