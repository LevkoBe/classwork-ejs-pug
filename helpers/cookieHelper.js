const setCookie = (res, cookiesSettings) => {
    
    const name = cookiesSettings[0][0];
    const value = cookiesSettings[0][1];
    let httpOnly = cookiesSettings.length > 1 && cookiesSettings[1][1] === 'true';

    res.cookie(name, value, {httpOnly: !!httpOnly});
}

const getCookie = (req, res) => {
    const cookieName = req.params.name;
    const cookieValue = req.cookies[cookieName];
    if (cookieValue == "" || !cookieValue) {
        throw error("Error");
    }
    res.render('getCookie', {cookieName, cookieValue});
}

module.exports = { setCookie, getCookie };
