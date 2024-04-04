import mongoose, { Mongoose } from 'mongoose'

const commentSchema = new mongoose.Schema({
    user:
    {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    post: {
        type: mongoose.Types.ObjectId,
        ref: "Post",
        required: true
    },
    text: {
        type: String,
        required: true
    },
    upvotes: {
        type: Array,
        default: [],
        required: true
    }

}, { timestamps: true })

const commentModel = mongoose.model('User', commentSchema)
export default commentModel