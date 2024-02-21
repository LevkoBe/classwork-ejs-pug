const axios = require('axios');



async function getFromDjango(req, res) {
    try {
        const djangoResponse = await axios.get('http://127.0.0.1:8000/hw7/express');
        console.log("Success", djangoResponse);
        res.send('Express: successful request');
    } catch (error) {
        console.error('Error fetching achievements:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
async function postOnDjango(req, res) {
    try {
        const djangoResponse = await axios.post('http://127.0.0.1:8000/hw7/express', {"key": "value"});
        console.log("Success", djangoResponse);
        res.send('Express: successful request');
    } catch (error) {
        console.error('Error fetching achievements:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

function getFromExress(req, res) {
    res.send('Express: successful request');
}

function postOnDjango(req, res) {
    res.send('Express: successful request');
}

module.exports = {
    getFromDjango,
    postOnDjango,
    getFromExress,
    postOnExress,
};