import express from "express"
import Comment from "../models/comment.model.js"

const router = express.Router()


// return all posts form database
// we are making all CRUD requests inside controller folder
router.get("/", async (req, res)=>{
    const posts = await Comment.find()
    res.status(200).send(`Here are the posts fetched from db \n ${posts}`)
})


export default router