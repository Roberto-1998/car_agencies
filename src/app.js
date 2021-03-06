const express = require('express');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const morgan = require('morgan');
const helmet = require('helmet');
const { v4: uuidv4 } = require('uuid');
const createError = require('http-errors')
const { port } = require('./config');
const { sequelize } = require('./db/models');
const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const i18nMiddleware = require('i18next-http-middleware');

// Variables
const app = express();
const routes = require('./routes');


// Middlewares
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(i18nMiddleware.handle(i18next));

// ---------------------i18next--------------------------------------

i18next.use(Backend).use(i18nMiddleware.LanguageDetector)
    .init({
        fallbackLng: 'es',
        backend: {
            loadPath: path.join(__dirname, './locales/{{lng}}/translation.json')
        }
    })
    // ---------------------i18next--------------------------------------

// ---------------------MULTER---------------------------------------
const storage = multer.diskStorage({
    /*  destination: path.join(__dirname, '../public/uploads/images/autos'), */
    filename: (req, file, cb) => {
        cb(null, uuidv4() + '-' + file.originalname);
    }
})

app.use(multer({
    storage,
    limits: {
        fileSize: 1000000
    },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpg|jpeg|png|gif/;
        const mimetype = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));
        if (mimetype && extname) {
            return cb(null, true)
        }
        cb(createError(400, 'some_errors.multer.imagen_extension_error'));
    }
}).single('imagen'));
// ---------------------MULTER---------------------------------------


// ROUTES
app.use('/', routes);



// 404 handler and pass to error handler
app.use((req, res, next) => {
    // const error = new Error('Not found');
    // error.status = 404;
    // next(error);
    next(createError(404, "some_errors.not_found_page"))
})


// Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            status: err.status || 500,
            message: req.t(err.message)
        }
    })
})


sequelize.sync({ force: false })
    .then(() => {
        console.log('Base de Datos conectada!!');
        app.listen(port, () => console.log(`Agencia de Autos corriendo en puerto ${port}!`))
    })
    .catch((err) => console.log(err))