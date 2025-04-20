const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: String,
    bankAmount: Number
})

module.exports = mongoose.model('Player', playerSchema);
