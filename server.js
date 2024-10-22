const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Importation des routes
const bookRoutes = require('./routes/books');
const authRoutes = require('./routes/auth');
const borrowRoutes = require('./routes/borrow');
const rateRoutes = require('./routes/rate');

// Utilisation des routes
app.use('/books', bookRoutes);
app.use('/auth', authRoutes);
app.use('/borrow', borrowRoutes);
app.use('/rate', rateRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
