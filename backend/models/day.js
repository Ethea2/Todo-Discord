const mongoose = require('mongoose')
const Schema = mongoose.Schema

const daySchema = new Schema({
    date: {
        type: String,
        required: true
    },
    todos: [{
        type: Schema.Types.ObjectId,
        ref: 'Todo'
    }]
}, {timestamps: true})

module.exports = mongoose.model('Day', daySchema)