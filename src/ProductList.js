// src/ProductList.js
import { useState, useEffect } from 'react'; // 1. On importe les outils
import ProductPreview from './ProductPreview';

function ProductList() {

    // On déclare la variable 'produits' et la fonction pour la modifier 'setProduits'
    const [produits, setProduits] = useState([]); 

    useEffect(() => {
        // On récupère les données du backend
        fetch('http://localhost:3001/get-products')
            .then(response => response.json())
            .then(data => {
                setProduits(data); // On remplit la liste avec les données
            })
            .catch(error => console.error("Erreur :", error));
    }, []);

    return (
        <div className="liste-produits">
            <h2>Nos produits :</h2>
            
            {/* 3. Maintenant 'produits' existe, on peut faire la boucle dessus */}
            {produits.map((produit) => (
                <ProductPreview 
                    key={produit.id}
                    nom={produit.nom} 
                    description={produit.description}
                    image={produit.image} 
                />
            ))}
        </div>
    );
}

export default ProductList;