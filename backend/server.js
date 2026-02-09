const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

// La liste des produits AVEC les images
const produits = [
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

app.get('/get-products', (req, res) => {
    res.json(produits);
});

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});