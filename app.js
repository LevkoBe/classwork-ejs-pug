const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const mongoConnection = "mongodb+srv://lbeniakh:6YdKpcWoP56wFCnW@cluster0.tdh5js4.mongodb.net/?retryWrites=true&w=majority";

const PORT = 3400;

const start = async() => {
    await mongoose.connect(mongoConnection);

    app.listen(PORT, () => {
        console.log(`Server is running at "http://localhost:${PORT}"`);
    })
}

start();

// app.set('view engine', 'ejs');
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/', require('./routes/homeRoutes'));
app.use('/pug', (req, res) => {
    res.render('index', {title: 'Hey', message: "Hello there!"})
});
app.use('/form', require('./routes/formRoutes'));
app.use('/pug2', (req, res) => {
    res.render('index', {title: 'Hey 2', message: "Hello there!", youAreUsingPug: true})
});


