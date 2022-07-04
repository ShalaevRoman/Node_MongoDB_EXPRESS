import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const user = new Schema({
    first_name: String,
    email: String,
    password: String,
})

export default model('User', user);