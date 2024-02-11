
const setHeader = (res, headerName, headerValue) => {
  res.setHeader(headerName, headerValue);
};

const getHeader = (req) => {
    const headerName = req.params.name;
    console.log(req.headers);
    const headerValue = req.headers[headerName];
    if (headerValue) {
        return {headerName: headerName, headerValue: headerValue};
    }
    else {
        throw error("Error");
    }
};

module.exports = { setHeader, getHeader };