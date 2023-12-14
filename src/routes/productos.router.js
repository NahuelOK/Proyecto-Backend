import { Router } from "express";
import productoModel from "../models/productos.models.js";

const router = Router();

router.get("/", async (req, res) => {
    const productos = await productoModel.find().lean().exec()
    console.log({productos})
    res.render("list", { productos })
})

router.post("/", async (req, res) => {
    try{
        const productoNew = req.body
        const result = await productoModel.create(productoNew)
        console.log({result})
        res.redirect("/productos")
    } catch (error){
        console.log(error)
        res.send("Error al crear...")
    }
})

router.get("/create", async (req, res) => {
    res.render("create", {})
})

router.delete("/:id", async (req, res) => {
    res.send("Producto Eliminandose...")})

router.get("/:name", async (req, res) => {
    res.render("one", {producto: {
    }})
})

export default router;