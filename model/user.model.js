const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        nom: {
            type: String,
            required: true,
            maxlength: 60,
            unique: true,
            trim: true
        },
        age:{
    type: Number,
    },
        favoriteFoods: {
        type: [String]
    }
    }
)

const UserModel = mongoose.model('user', UserSchema)
module.exports = UserModel;