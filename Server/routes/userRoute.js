const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const userController = require("../controllers/userController");


router.post(
  '/',
  [
      check('name', 'Name is required').not().isEmpty(),
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
  ],
  async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }
      await userController.registerUser(req, res);
  }
);


router.post(
  '/login',
  [
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Password is required').exists()
  ],
  async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }
      await userController.loginUser(req, res);
  }
);


router.get('/', auth, userController.getUser);

module.exports = router;