const express = require('express');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const morgan = require('morgan');
const helmet = require('helmet');
const { v4: uuidv4 } = require('uuid');
const { port } = require('./config');
const { sequelize } = require('./db/models');


// Variables
const app = express();
const routes = require('./routes');
const { notFound } = require('./controllers');



// Middlewares
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads/images/autos'),
    filename: (req, file, cb) => {
        cb(null, uuidv4() + '-' + file.originalname);
    }

})
app.use(multer({
    storage,
    limits: {
        fileSize: 2000000
    },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpg|jpeg|png|gif/;
        const mimetype = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));
        if (mimetype && extname) {
            return cb(null, true)
        }
        cb("Error: Archivo debe ser una imagen valida")
    }

}).single('imagen'));



// Routes
app.use('/', routes);

app.use(notFound)

sequelize.sync({ force: false })
    .then(() => {
        console.log('Base de Datos conectada!!');
        app.listen(port, () => console.log(`Agencia de Autos corriendo en puerto ${port}!`))
    })
    .catch((err) => console.log(err))