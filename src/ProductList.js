// src/ProductList.js
import ProductPreview from './ProductPreview'; // J'importe mon composant "template"

function ProductList() {
  // ... le début du fichier ne change pas

    return (
        <div className="liste-produits">
            <h2>Mes produits :</h2>
            {produits.map((produit) => (
                <ProductPreview 
                    key={produit.id}
                    nom={produit.nom} 
                    description={produit.description}
                    // J'ajoute cette ligne pour passer l'image au composant enfant
                    image={produit.image} 
                />
            ))}
        </div>
    );
}

export default ProductList;