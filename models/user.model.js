const mongoose = require('mongoose')


const UserModel = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    password: {
        type: String
    },
    role: {
        type: String
    }
    },
{timestamps: true}
)



module.exports = mongoose.model('Users', UserModel)