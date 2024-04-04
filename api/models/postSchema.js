import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
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
})