import React, { useState, useEffect } from 'react';
import AddProduct from './Addproduct';
import ProductList from './ProductList';

function Magasin() {
    const [produits, setProduits] = useState([]);
    const [productToEdit, setProductToEdit] = useState(null);

    const fetchProducts = () => {
        fetch('http://localhost:3001/products')
            .then(res => res.json())
            .then(data => setProduits(data))
            .catch(err => console.error("Erreur :", err));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // Je crée la fonction qui manquait
    const handleProductClick = (produit) => {
        console.log("Produit cliqué :", produit.nom);
        // Plus tard, vous pourrez ici changer de page pour voir le détail
    };

    const handleEditClick = (produit) => {
        setProductToEdit(produit);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <AddProduct 
                onProductAdded={fetchProducts} 
                productToEdit={productToEdit} 
                onCancelEdit={() => setProductToEdit(null)} 
            />

            <hr />

            {/* J'ajoute BIEN 'onProductClick' ici */}
            <ProductList 
                produits={produits} 
                onProductClick={handleProductClick} 
                onEditProduct={handleEditClick} 
            />
        </div>
    );
}

export default Magasin;