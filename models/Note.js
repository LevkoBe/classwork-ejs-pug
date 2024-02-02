const mongoose = require('mongoose');

const Note = mongoose.model('Note', { title: String, importance: Number });
module.exports = Cat;