const express = require('express');
const cors = require('cors');
const { port } = require('./config')


// Variables
const app = express();


// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.listen(port, () => console.log(`Example app listening on port ${port}!`))