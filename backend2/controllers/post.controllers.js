import Post from "../models/post.model.js"

export const getPosts = async (req, res) => {
    const posts = await Post.find()
    res.status(200).json(`Here are the posts fetched from db \n ${posts}`)

};
export const getPost = async (req, res) => {
    const post = await Post.findOne({slug:req.params.slug})
    res.status(200).json(`Here are the posts fetched from db \n ${post}`)

};
export const createPost = async (req, res) => {
    const newPost = new Post(req.body)
    const post = await newPost.save();
    res.status(200).json(`New post has been created from postman.\n ${post}`)

};
export const deletePost = async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json(`Post has been deleted.\n ${req.id}`)

};