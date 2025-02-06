import express from "express"
import dotenv from "dotenv"
import connectDB from "./lib/connectDB.js"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"

dotenv.config()
const port = process.env.PORT || 3000;
const app = express()
app.use(express.json())

app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    
    res.json({
        message: err.message || "something went",
        status : err.status,
        stack:err.stack
    })
})

app.listen(port,(req, res)=>{
    connectDB();
    console.log(`Server Running on port ${port}.`)
})