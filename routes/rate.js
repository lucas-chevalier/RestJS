const express = require('express');
const router = express.Router();

let books = require('./books').books;
let users = require('./auth').users;

// Noter un livre
router.post('/:bookId/:userId', (req, res) => {
  const { bookId, userId } = req.params;
  const { rating } = req.body;
  const user = users.find(u => u.id == userId);

  if (!user) return res.status(404).json({ message: 'User not found' });
  if (!user.borrowedBooks.includes(parseInt(bookId))) {
    return res.status(400).json({ message: 'You can only rate books you have borrowed' });
  }

  const book = books.find(b => b.id == bookId);
  book.rating = rating; // Enregistre la note sur le livre
  res.json({ message: 'Book rated', book });
});

module.exports = router;
