const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    when: {
        type: String,
        required: true
    },
    what: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['done', 'ongoing'],
        default: 'ongoing'
    }
}, {timestamps: true})

module.exports = mongoose.model('Todo', todoSchema)