const express = require('express');

const apiRouter = require('./api');

const router = express.Router();

router.use('/api', apiRouter);

router.get('/', (req, res) => {
  res.json({ message: 'test root index' });
});

module.exports = router;