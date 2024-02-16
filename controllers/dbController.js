const Achievement = require("../models/Achievement").Achievement;
const list = [
    {title: 'Woke up', score: 35, status: true},
    {title: 'Did math', score: 345, status: true},
    {title: 'Did programming', score: 345, status: true},
    {title: 'Finished programming task', score: -34, status: false}
]

async function addDBrecords(req, res) {
    try {
    console.log("Achievement", Achievement);
        const result = await Achievement.insertMany(list);
        console.log('Achievements added:', result);
        res.send('Achievements added');
    } catch (error) {
        console.error('Error adding achievements:', error);
        res.status(500).json({ error: 'Internal Server Achievement Error' });
    }
}

async function doSmthWithRecords() {
    try {
        const result = await Achievement.insertMany(list);
        // const result = await Achievement.find({score: 24});
        console.log('Achievements added:', result);
        res.send('Achievements added');
    } catch (error) {
        console.error('Error adding achievements:', error);
        res.status(500).json({ error: 'Internal Server Achievement Error' });
    }
}



async function getDB(req, res) {
    try {
        const achievements = list;
        res.render('db', { qty: achievements.length, achievements });
    } catch (error) {
        console.error('Error fetching achievements:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {
    getDB,
    addDBrecords,
};