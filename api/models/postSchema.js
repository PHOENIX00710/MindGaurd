import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        ref: "User",
    },
    likes: {
        type: Array,
        default: [],
        required: false
    },
    comments: {
        type: Array,
        default: []
    }
}, { timestamps: true })

const postModel = mongoose.model("Post", postSchema)
export default postModel