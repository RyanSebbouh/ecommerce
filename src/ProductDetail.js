import React from 'react';

function ProductDetail({ produit, onBack }) {
    return (
        <div style={{ padding: '20px', border: '1px solid #333', borderRadius: '8px', maxWidth: '600px', margin: '20px auto' }}>
            {/* Bouton retour */}
            <button 
                onClick={onBack} 
                style={{ padding: '5px 10px', marginBottom: '20px', cursor: 'pointer' }}
            >
                ⬅ Retour au magasin
            </button>

            {/* Infos du produit */}
            <div style={{ textAlign: 'center' }}>
                {produit.image && (
                    <img 
                        src={produit.image} 
                        alt={produit.nom} 
                        style={{ maxWidth: '100%', maxHeight: '300px', objectFit: 'cover' }} 
                    />
                )}
                <h1 style={{ color: '#2c3e50' }}>{produit.nom}</h1>
                <p style={{ fontSize: '1.2rem', color: '#555' }}>{produit.description}</p>
                
                {/* Affichage du prix si disponible */}
                {produit.prix && (
                    <h3 style={{ color: 'green' }}>Prix : {produit.prix} €</h3>
                )}
            </div>
        </div>
    );
}

export default ProductDetail;