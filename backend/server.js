const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

// 1. IMPORTANT : Cette ligne permet au serveur de comprendre les données JSON envoyées par React
app.use(express.json()); 

// 2. On utilise 'let' au lieu de 'const' pour pouvoir modifier la liste (ajouter/modifier)
let produits = [
    { 
        id: 1, 
        nom: "Orange", 
        description: "Plein de vitamine C", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg" 
    },
    { 
        id: 2, 
        nom: "Chocolat", 
        description: "Pour le moral", 
        image: "https://upload.wikimedia.org/wikipedia/commons/7/70/Chocolate_%28blue_background%29.jpg" 
    },
    { 
        id: 3, 
        nom: "Pain", 
        description: "Fait maison", 
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Korb_mit_Br%C3%B6tchen.JPG" 
    }
];

// --- ROUTE 1 : Récupérer la liste (GET) ---
// Je garde tes deux routes possibles pour être sûr que ça marche
app.get('/get-products', (req, res) => {
    res.json(produits);
});

app.get('/products', (req, res) => {
    res.json(produits);
});

// --- ROUTE 2 : Ajouter un produit (POST) ---
// C'est celle-ci qui te manquait !
// backend/server.js

app.post('/products', (req, res) => {
    // Je récupère toutes les données envoyées par le front
    const { nom, description, prix, image } = req.body;
    
    const nouveauProduit = {
        id: Date.now(),
        nom: nom || "Produit sans nom",
        description: description || "Pas de description",
        prix: parseFloat(prix) || 0, // Je m'assure que c'est un nombre
        image: image || "https://via.placeholder.com/150" // Image par défaut
    };

    produits.push(nouveauProduit);
    res.json(nouveauProduit);
});

// --- ROUTE 3 : Modifier un produit (PUT) ---
// Nécessaire pour l'exercice de modification
app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const modifications = req.body;

    // On met à jour le produit correspondant dans la liste
    produits = produits.map(p => (p.id === id ? { ...p, ...modifications } : p));

    console.log("Produit modifié ID:", id);
    res.json({ message: "Succès" });
});

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});
// backend/server.js

// --- ROUTE 4 : Supprimer un produit (DELETE) ---
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    // Je filtre la liste pour ne garder que les produits qui n'ont pas cet ID
    produits = produits.filter(p => p.id !== id);

    console.log("Produit supprimé ID:", id);
    res.json({ message: "Supprimé avec succès" });
});