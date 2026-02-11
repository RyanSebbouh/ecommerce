// AddProduct.js (VERSION CORRIGÉE)
import React, { useState, useEffect } from 'react';

function AddProduct({ onProductAdded, productToEdit, onCancelEdit }) {
    const [nom, setNom] = useState('');
    const [description, setDescription] = useState('');
    const [prix, setPrix] = useState('');
    const [image, setImage] = useState('');

    // ✅ Remplir le formulaire quand on clique sur "Modifier"
    useEffect(() => {
        if (productToEdit) {
            setNom(productToEdit.nom || '');
            setDescription(productToEdit.description || '');
            setPrix(productToEdit.prix || '');
            setImage(productToEdit.image || '');
        }
    }, [productToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const produit = { nom, description, prix: parseFloat(prix), image };

        // ✅ Si on modifie un produit existant
        if (productToEdit) {
            fetch(`http://localhost:3001/products/${productToEdit.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(produit)
            })
            .then(res => res.json())
            .then(() => {
                onProductAdded(); // Rafraîchir la liste
                resetForm();
                onCancelEdit(); // Sortir du mode édition
            })
            .catch(err => console.error('Erreur modification:', err));
        } 
        // ✅ Sinon, on ajoute un nouveau produit
        else {
            fetch('http://localhost:3001/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(produit)
            })
            .then(res => res.json())
            .then(() => {
                onProductAdded();
                resetForm();
            })
            .catch(err => console.error('Erreur ajout:', err));
        }
    };

    const resetForm = () => {
        setNom('');
        setDescription('');
        setPrix('');
        setImage('');
    };

    return (
        <div style={{ padding: '20px', border: '2px solid #3498db', borderRadius: '8px' }}>
            <h2>{productToEdit ? '✏️ Modifier le produit' : '➕ Ajouter un produit'}</h2>
            
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Nom du produit" 
                    value={nom} 
                    onChange={(e) => setNom(e.target.value)} 
                    required 
                    style={{ display: 'block', margin: '10px 0', padding: '8px', width: '300px' }}
                />
                <input 
                    type="text" 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                    style={{ display: 'block', margin: '10px 0', padding: '8px', width: '300px' }}
                />
                <input 
                    type="number" 
                    step="0.01"
                    placeholder="Prix" 
                    value={prix} 
                    onChange={(e) => setPrix(e.target.value)} 
                    required 
                    style={{ display: 'block', margin: '10px 0', padding: '8px', width: '300px' }}
                />
                <input 
                    type="url" 
                    placeholder="URL de l'image" 
                    value={image} 
                    onChange={(e) => setImage(e.target.value)} 
                    style={{ display: 'block', margin: '10px 0', padding: '8px', width: '300px' }}
                />
                
                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}>
                    {productToEdit ? 'Mettre à jour' : 'Ajouter'}
                </button>

                {productToEdit && (
                    <button 
                        type="button"
                        onClick={() => {
                            resetForm();
                            onCancelEdit();
                        }}
                        style={{ padding: '10px 20px', backgroundColor: '#95a5a6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Annuler
                    </button>
                )}
            </form>
        </div>
    );
}

export default AddProduct;