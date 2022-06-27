import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const contacts = new Schema({
    name: String,
    number: Number,
})

export default model('contactsUser', contacts);