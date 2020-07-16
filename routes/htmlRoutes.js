const path = require('path');
const router = require('express').Router();

// '/notes' respond with notes.html
router.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// all other routes respond with index.html
router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
