const api = require('./api');
const notFound = require('./not-found');


module.exports = {
    ...api,
    ...notFound
}