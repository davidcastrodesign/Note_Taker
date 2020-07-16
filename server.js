const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// init app and port defined
const app = express();
const PORT = process.env.Port || 3000;

// to start port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
