const login = require('./login');
const google = require('./google');


module.exports = {
    ...login,
    ...google
}