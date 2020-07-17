const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// init app and port defined
const app = express();
const PORT = process.env.Port || 5000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// to start port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
