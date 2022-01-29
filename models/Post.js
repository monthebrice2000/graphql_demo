const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title :{ type: String, required: true },
    imageUrl :{ type: String , required: true },
    categories :{ type: [String], required: true},
    description :{ type: String, required: true},
    createdBy:{ type : mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    createdDate:{ type: Date, required: true, default: Date.now() },
    likes : { type: Number, default: 0 },
    messages: [{
        messageBody: {type: String, required: true},
        messageDate: {type: Date, default: Date.now() },
        messageUser: {type: mongoose.Schema.Types.ObjectId, required: true, ref : 'User'},
    }]
})

module.exports = mongoose.model('Posts', PostSchema );