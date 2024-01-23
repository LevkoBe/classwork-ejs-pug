const homeController = {
    getHomePage: (req, res) => {
        res.render('index');
        // res.render('home');
    },
    getInfoPage: (req, res) => {
        res.send('getInfoPage sent');
    }
}

module.exports = homeController;