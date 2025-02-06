import express from "express"

const router = express.Router()

router.get("/posttest",(req, res)=>{
    res.send("<h1>post Response </h1>")
})


export default router