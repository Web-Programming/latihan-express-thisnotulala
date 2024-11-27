const mongoose = require("mongoose");

const applySchema = new mongoose.Schema({
    firstname:{
        type: String,
    },
    lastname:{
        type: String,
    },
    email:{
        type: String,
        unique: true,  // Email harus unik dalam database
    }
});

const Apply = mongoose.model('Apply', applySchema);
module.exports = Apply;
