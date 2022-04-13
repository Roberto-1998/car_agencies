const { request, response } = require('express');
const NodeCache = require('node-cache');

const cache = new NodeCache();

const nodeCache = (duration) => (req = request, res = response, next) => {

    // is request a GET?
    // if not, call next
    if (req.method !== 'GET') {
        console.error('Cannot cache non-GET methods!');
        return next();
    }

    // check if key exists in cache
    const key = req.originalUrl;
    const cachedResponse = cache.get(key);

    // if it exists, send cache result
    if (cachedResponse) {
        console.log(`Cache hit for ${key}`);
        res.json(JSON.parse(cachedResponse))
    } else {
        // if not, replace .send with method to set response to cache
        console.log(`Cache miss for ${key}`);
        res.originalSend = res.send;
        res.send = body => {
            res.originalSend(body);
            cache.set(key, body, duration);
        }
        next();
    };

}

module.exports = {
    nodeCache
}