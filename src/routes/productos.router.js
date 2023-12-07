import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
    res.render("list", { productos: []})
})

router.get("/create", async (req, res) => {
    res.render("create", {})
})

router.get("/:name", async (req, res) => {
    res.render("one", {producto: {
        name:"coca", price: 2000, stock: 23, desc: "blablabla", img:""
    }})
})

export default router;