const router = require('express').Router();

// /api prepended to every Route
// If you need an arg, but won't use it, put an underline before it
router.get('/', (_req, res) => {
  res.send('Hello');
});

module.exports = router;
