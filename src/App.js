// eslint-disable-next-line
import React, { useState } from 'react';
import './App.css';

import Accueil from './Accueil';
import Contact from './ContactData';
import Welcome from './Welcome';
import Majeur from './Majeur';
import CompteurDeClick from './Compteur_de_click';
import Magasin from './Magasin';
import ProductDetail from './ProductDetail';

function App() {
    const [currentPage, setCurrentPage] = useState('accueil');
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Navigation
    const changerPage = (nomPage, event) => {
        if(event) event.preventDefault();
        setCurrentPage(nomPage);
        if (nomPage !== 'detail') setSelectedProduct(null);
    };

    // Gestion du clic produit
    const handleProductClick = (produit) => {
        setSelectedProduct(produit);
        setCurrentPage('detail');
    };

    // Retour au magasin
    const handleBackToStore = () => {
        setSelectedProduct(null);
        setCurrentPage('magasin');
    };

    return (
        <div className="App">
            
            {/* BARRE DE NAVIGATION */}
            <nav style={styles.navBar}>
                <a href="/" onClick={(e) => changerPage('accueil', e)} style={styles.link}>🏠 Accueil</a>
                <a href="/contact" onClick={(e) => changerPage('contact', e)} style={styles.link}>✉️ Contact</a>
                <a href="/welcome" onClick={(e) => changerPage('welcome', e)} style={styles.link}>👋 Welcome</a>
                <a href="/compteur" onClick={(e) => changerPage('compteur', e)} style={styles.link}>📊 Compteur</a>
                <a href="/majeur" onClick={(e) => changerPage('majeur', e)} style={styles.link}>� Majeur</a>
            </nav>

            {/* CONTENU DES PAGES */}
            <div className="page-content" style={{ padding: '20px' }}>
                
                {currentPage === 'accueil' && <Accueil />}
                {currentPage === 'contact' && <Contact />}
                {currentPage === 'welcome' && <Welcome />}
                {currentPage === 'compteur' && <CompteurDeClick />}
                {currentPage === 'majeur' && <Majeur />}

                {/* ✅ UNE SEULE FOIS : Le composant Magasin gère tout */}
                {currentPage === 'magasin' && (
                    <Magasin onProductClick={handleProductClick} />
                )}

                {/* Page Détail */}
                {currentPage === 'detail' && selectedProduct && (
                    <ProductDetail 
                        produit={selectedProduct} 
                        onBack={handleBackToStore}
                    />
                )}

            </div>
        </div>
    );
}

const styles = {
    navBar: {
        padding: "15px",
        backgroundColor: "#333",
        color: "white",
        marginBottom: "20px",
        display: "flex",
        gap: "20px"
    },
    link: {
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
        cursor: "pointer"
    }
};

export default App;