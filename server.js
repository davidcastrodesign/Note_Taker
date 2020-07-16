const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.Port || 3000;

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
