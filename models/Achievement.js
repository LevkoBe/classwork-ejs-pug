const mongoose = require("mongoose");

const AchievementSchema =  new mongoose.Schema({
    date: {type: Date, default: Date.now },
    status: Boolean,
    title: String,
    score: Number,
});

const Achievement = mongoose.model('Achievement', AchievementSchema);

module.exports = {
    AchievementSchema,
    Achievement,
};