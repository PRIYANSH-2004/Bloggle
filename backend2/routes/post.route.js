import express from "express"
import { getPosts, getPost,createPost,deletePost } from "../controllers/post.controllers.js"

const router = express.Router()
// return all posts form database
// we are making all CRUD requests inside controller folder
router.get("/", getPosts)
router.get("/:slug", getPost)
router.post("/", createPost)
router.delete("/:id", deletePost)


export default router