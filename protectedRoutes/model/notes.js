const mongoose = require('mongoose');


const noteSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"Name is required"]
    },

    description:{
        type: String,
        default: "",
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true,"User is required"]
    }
},{timestamps: true});

module.exports = mongoose.model('note',noteSchema);