import express from "express";
import handlebars from "express-handlebars"
import __dirname from "./ultils.js"
import productosRouter from "./routes/productos.router.js"

const app = express();

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views")
app.set("view engine", "handlebars");

app.get("/", (req, res) => res.render("index", {}))
app.get("/inicio", (req, res) => res.send("OK"))
app.get("/productos", productosRouter)

app.listen(8080, ()=> console.log("Corriendo...."))