import mongoose from 'mongoose'

const schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    username: {
        type: String,
        required: [true, 'Please enter you username'],
        unique: [true, 'username taken']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: [true, 'user already exist']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    }
});

const userModel = mongoose.model('users', schema);

export default userModel