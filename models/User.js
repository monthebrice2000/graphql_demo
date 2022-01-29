const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    joinDate: { type: Date, required: true, default: Date.now() },
    avatar: { type: String  },
    favorites : { type: [ mongoose.Schema.Types.ObjectId ], required: true, ref : 'Posts' }
});

module.exports = mongoose.model('Users', UserSchema);