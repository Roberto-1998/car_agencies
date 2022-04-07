const express = require('express');
const cors = require('cors');
const { port } = require('./config');
const morgan = require('morgan');
const helmet = require('helmet');
const { sequelize } = require('./db/models');



// Variables
const app = express();
const routes = require('./routes');
const { notFound } = require('./controllers');


// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());


// Routes
app.use('/', routes);

app.use(notFound)

sequelize.sync({ force: true })
    .then(() => {
        console.log('Base de Datos conectada!!');
        app.listen(port, () => console.log(`Agencia de Autos corriendo en puerto ${port}!`))
    })
    .catch((err) => console.log(err))