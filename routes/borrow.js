const express = require('express');
const router = express.Router();

let books = require('./books').books;
let users = require('./auth').users;
let borrowedBooks = [];

// Emprunter un livre
router.post('/:bookId/:userId', (req, res) => {
  const { bookId, userId } = req.params;
  const book = books.find(b => b.id == bookId);
  const user = users.find(u => u.id == userId);

  if (!book || !user) return res.status(404).json({ message: 'Book or User not found' });
  if (!book.available) return res.status(400).json({ message: 'Book is already borrowed' });

  book.available = false;
  user.borrowedBooks.push(book.id);
  borrowedBooks.push({ bookId: book.id, userId: user.id });

  res.json({ message: 'Book borrowed', book, user });
});

// Vérifier si un livre est emprunté
router.get('/is-borrowed/:bookId', (req, res) => {
  const { bookId } = req.params;
  const book = books.find(b => b.id == bookId);
  if (!book) return res.status(404).json({ message: 'Book not found' });

  res.json({ isBorrowed: !book.available });
});

module.exports = router;
