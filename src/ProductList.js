import React from 'react';
import ProductPreview from './ProductPreview';

function ProductList({ produits, onProductClick, onEditProduct }) { 

    return (
        <div className="liste-produits">
            <h2>Nos produits en vente :</h2>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {produits && produits.length > 0 ? (
                    produits.map((produit) => (
                        <div 
                            key={produit.id} 
                            style={{ 
                                border: '1px solid #ddd', 
                                padding: '10px', 
                                borderRadius: '8px',
                                textAlign: 'center'
                            }}
                        >
                            {/* Je vérifie que onProductClick existe avant de l'appeler */}
                            <div 
                                onClick={() => onProductClick && onProductClick(produit)}
                                style={{ cursor: 'pointer' }}
                            >
                                <ProductPreview {...produit} />
                            </div>

                            {/* Je vérifie que onEditProduct existe avant de l'appeler */}
                            <button 
                                onClick={() => onEditProduct && onEditProduct(produit)}
                                style={{
                                    marginTop: '10px',
                                    backgroundColor: '#f39c12',
                                    color: 'white',
                                    border: 'none',
                                    padding: '5px 15px',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                ✏️ Modifier
                            </button>
                        </div>
                    ))
                ) : (
                    <p>Aucun produit disponible.</p>
                )}
            </div>
        </div>
    );
}

export default ProductList;