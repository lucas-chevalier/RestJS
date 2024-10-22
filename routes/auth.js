const express = require('express');
const router = express.Router();

let users = [
  { id: 1, username: 'user1', password: 'pass1', borrowedBooks: [] },
  { id: 2, username: 'user2', password: 'pass2', borrowedBooks: [] },
];

// Route d'authentification
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  res.json({ message: 'Logged in', userId: user.id });
});

module.exports = router;
