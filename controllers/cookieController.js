const { setCookie, getCookie } = require('../helpers/cookieHelper');

const cookieController = {
    getIndexPage: (req, res) => {
        let cookies;
        if (req.cookies) {
            cookies = Object.keys(req.cookies).map(name => ({name}));
        }
        res.render('allCookies', {cookies});
    },
    setHttpCookie: (req, res) => {
        try {
            const cookiesSettings = Object.entries(req.query);
            setCookie(res, cookiesSettings);
            res.redirect("/cookies")
        } catch {
            res.status(404).render('error', {message: "404: Can't add the cookie."});
        }
    },
    getHttpCookie: (req, res) => {
        try {
            getCookie(req, res);
        } catch {
            res.status(404).render('error', {message: "404: Can't find the cookie."});
        }
    },
    setFormCookie: (req, res) => {
        res.render('setCookie');
    },
    addHttpCookie: (req, res) => {
        const {name, value, httpOnly} = req.body;
        res.cookie(name, value, { httpOnly: !!httpOnly });
        res.redirect('/cookies');
    }
}

module.exports = cookieController;
