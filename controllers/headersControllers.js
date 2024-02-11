const { setHeader, getHeader } = require('../helpers/headersHelper');

const headersController = {
    setHeader: (req, res) => {
        try {
            const headerName = Object.keys(req.query)[0];
            const headerValue = Object.values(req.query)[0];
            setHeader(res, headerName, headerValue);
            res.json({headerName: headerName, headerValue: headerValue});
        } catch (err) {
            res.status(404).render('error', {message: "404: Can't set the header."});
        }
    },
    getHeader: (req, res) => {
        try {
            res.send(getHeader(req));
        } catch (e) {
            res.status(404).render('error', {message: "404: Can't find the header."});
        }
    },
    addHeader: (req, res) => {
        const {name, value, httpOnly} = req.body;
        res.cookie(name, value, { httpOnly: !!httpOnly });
        res.redirect('/cookies');
    }
}

module.exports = headersController;
