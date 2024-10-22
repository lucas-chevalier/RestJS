const express = require('express');
const router = express.Router();

let books = [
  { id: 1, title: 'Book 1', available: true },
  { id: 2, title: 'Book 2', available: true },
];

// Récupérer tous les livres
router.get('/', (req, res) => res.json(books));

// Ajouter un livre
router.post('/', (req, res) => {
  const { title } = req.body;
  const newBook = { id: books.length + 1, title, available: true };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Mettre à jour un livre
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const book = books.find(b => b.id == id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  book.title = title;
  res.json(book);
});

// Supprimer un livre
router.delete('/:id', (req, res) => {
  books = books.filter(b => b.id != req.params.id);
  res.status(204).send();
});

module.exports = router;
