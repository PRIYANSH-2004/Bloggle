import express from "express"
import dotenv from "dotenv"
import connectDB from "./lib/connectDB.js"
// import userRouter from "./routes/user.route.js"
// import postRouter from "./routes/post.route.js"
// import commentRouter from "./routes/.route.js"

dotenv.config()
const port = process.env.PORT || 3000;
const app = express()

// app.use("/users", userRouter)
// app.use("/posts", postRouter)
// app.use("/comments", commentRouter)

app.listen(port,(req, res)=>{
    connectDB();
    console.log(`Server Running on port ${port}.`)
})