import mongoose from 'mongoose';
const {Schema, model} = mongoose;

import User from './user.entity.js'

const token = new Schema({
    userId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    refreshToken: String,
})

export default model('Token', token);