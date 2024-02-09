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
            const name = cookiesSettings[0][0];
            const value = cookiesSettings[0][1];
            let httpOnly = cookiesSettings.length > 1 && cookiesSettings[1][1] === 'true';

            res.cookie(name, value, {httpOnly: !!httpOnly});
            res.redirect("/cookies")
        } catch {
            res.render('error', {message: "Can't set the cookie."});
        }
    },
    getHttpCookie: (req, res) => {
        const cookieName = req.params.name;
        try {
            const cookieValue = req.cookies[cookieName];
            if (cookieValue == "" || !cookieValue) {
                throw error("Error");
            }
            res.render('getCookie', {cookieName, cookieValue});
        } catch {
            res.render('error', {message: "404: Can't find the cookie."});
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
