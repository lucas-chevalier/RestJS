Book Borrowing System API
Description
Le Book Borrowing System est une API REST permettant de gérer une collection de livres, l'authentification d'utilisateurs, l'emprunt de livres, ainsi que la possibilité de noter des livres. Cette API offre des routes pour effectuer des opérations CRUD sur les livres, authentifier les utilisateurs, emprunter des livres et laisser des évaluations, le tout de manière simple.

Fonctionnalités

CRUD pour les livres : Ajouter, consulter, modifier et supprimer des livres.

Authentification simple : Connexion des utilisateurs avec un nom d'utilisateur et un mot de passe.

Emprunt de livres : Permet aux utilisateurs d'emprunter un ou plusieurs livres.

Disponibilité des livres : Vérification si un livre est emprunté ou non.

Notation des livres : Seuls les utilisateurs ayant emprunté un livre peuvent le noter.

Transformation DTO : Une route spéciale fournit une transformation des données du livre pour une présentation plus simple.

Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

Node.js (version 14.x ou supérieure)
npm (version 6.x ou supérieure)


Installation
Clonez ce dépôt sur votre machine locale :

```bash
git clone https://github.com/lucas-chevalier/RestJS
```
Accédez au répertoire du projet :

```bash
cd RestJS
```
Installez les dépendances nécessaires :

```bash
npm install
```
Lancez le serveur de développement :

```bash
npm run dev
```
L'application sera accessible via http://localhost:3000.



Utilisation

Routes CRUD pour les livres

GET /books : Récupérer la liste de tous les livres.

POST /books : Ajouter un nouveau livre.

Exemple Body : { "title": "Nom du livre" }

PUT /books/:id : Mettre à jour le titre d'un livre spécifique.

Exemple Body : { "title": "Nouveau titre" }

DELETE /books/:id : Supprimer un livre spécifique.

GET /books/:id/dto : Récupérer un livre avec une transformation DTO (disponibilité du livre).



Authentification

POST /auth/login : Authentifie un utilisateur avec un nom d'utilisateur et un mot de passe.

Exemple Body : { "username": "user1", "password": "pass1" }

Routes d'emprunt de livres

POST /borrow/:bookId/:userId : Permet à un utilisateur d'emprunter un livre.

GET /borrow/is-borrowed/:bookId : Vérifie si un livre est emprunté.

Routes de notation des livres

POST /rate/:bookId/:userId : Permet à un utilisateur de noter un livre qu'il a emprunté.

Exemple Body : { "rating": 4 }