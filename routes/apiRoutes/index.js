const router = require('express').Router();
const userRoutes = require('./userRoutes');

// /api prepended to every Route
// If you need an arg, but won't use it, put an underline before it
router.use('/users', userRoutes);

module.exports = router;
