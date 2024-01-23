const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes/homeRoutes');

// set ejs / 
// app.set('view engine', 'ejs');
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);
app.use('/pug', (req, res) => {
    res.render('index', {title: 'Hey', message: "Hello there!"})
});
app.use('/form', (req, res) => {
    res.render('form')
});
app.use('/pug2', (req, res) => {
    res.render('index', {title: 'Hey 2', message: "Hello there!", youAreUsingPug: true})
});


const PORT = 3400;
app.listen(PORT, () => {
    console.log(`Server is running at "http://localhost:${PORT}"`);
})
