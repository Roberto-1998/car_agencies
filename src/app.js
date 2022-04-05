const express = require('express');
const cors = require('cors');
const { port } = require('./config');
const morgan = require('morgan');
const helmet = require('helmet');


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


app.listen(port, () => console.log(`Example app listening on port ${port}!`))