import express from "express"

const router = express.Router()

router.get("/anothertest",(req, res)=>{
    res.send("<h1>user Response </h1>")
})


export default router