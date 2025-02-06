import express from "express"

const router = express.Router()

router.get("/commenttest",(req, res)=>{
    res.send("<h1>comment Response </h1>")
})


export default router