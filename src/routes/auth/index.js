const router = require('express').Router();

const loginRouter = require('./login');
const googleRouter = require('./google');

router.use('/login', loginRouter);

router.use('/google', googleRouter);



module.exports = router;