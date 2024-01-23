const mongoose = require('mongoose');

const Cat = mongoose.model('Cat', { name: String, age: Number }); // like a class 'Cat'
module.exports = Cat;