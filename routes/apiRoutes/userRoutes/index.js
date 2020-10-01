const router = require('express').Router();
const { fetchUsers, addUser } = require('../../../model/userOrm');

// /api/users prepended to every Route
router.route('/')
  .get(async (_req, res) => {
    try {
      const users = await fetchUsers();
      res.json(users);
    } catch (e) {
      res.status(400).json(e);
    }
  })
  .post(async (req, res) => {
    try {
      const userInput = req.body;
      const result = await addUser(userInput);
      res.json(result);
    } catch (e) {
      res.status(400).json(e);
    }
  });

module.exports = router;
