import mongoose from 'mongoose'
import uuid from 'node-uuid'

const personSchema = new mongoose.Schema({
    id: { type: String, default: uuid.v1 },
    name: String,
    lastname: String,
    age: Number
})

const model = mongoose.model('person', personSchema);
export default model;