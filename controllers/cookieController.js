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
            const { name } = req.params;
            console.log(name);
            const { value } = req.query.name;
            const { httpOnly } = req.query.httpOnly;
            console.log(req.query.name, "... ", req.query);
            res.cookie(name, value, { httpOnly: !!httpOnly });
            let cookies;
            if (req.cookies) {
              cookies = Object.keys(req.cookies).map(name => ({name}));
            }
            res.render('allCookies', {cookies});
        } catch {
            res.render('error', {message: "Can't set the cookie."});
        }
    },
    getHttpCookie: (req, res) => {
        const cookieName = req.params.name;
        try {
            const cookieValue = req.cookies[cookieName];
            res.render('getCookie', {cookieName, cookieValue});
        } catch {
            res.render('error', {message: "Can't find the cookie."});
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
