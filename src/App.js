import React, { useState } from 'react';
import './App.css';
import Accueil from './Accueil';
import Contact from './ContactData';
import Welcome from './Welcome';
import Majeur from './Majeur';
import Compteur_de_click from './Compteur_de_click';
// import CompteurDePersonne from './CompteurDePersonne'; 

function App() {
    // Je déclare mon state avec le Hook useState
    const [currentPage, setCurrentPage] = useState('accueil');

    // Fonction pour changer de page
    const changerPage = (nomPage, event) => {
        // J'empêche le rechargement de la page
        event.preventDefault();
        // Je mets à jour l'état (plus besoin de this.setState)
        setCurrentPage(nomPage);
    };

    return (
        <div className="App">
            {/* --- 1. La Navigation --- */}
            <nav style={{ padding: "15px", backgroundColor: "#333", color: "white", marginBottom: "20px" }}>
                <a 
                    href="/" 
                    onClick={(e) => changerPage('accueil', e)} 
                    style={{ color: "white", marginRight: "20px", textDecoration: "none", fontWeight: "bold" }}
                >
                    🏠 Accueil
                </a>
                <a 
                    href="/contactData" 
                    onClick={(e) => changerPage('contact', e)} 
                    style={{ color: "white", marginRight: "20px", textDecoration: "none", fontWeight: "bold" }}
                >
                    ✉️ Contact
                </a>
                <a 
                    href="/Welcome" 
                    onClick={(e) => changerPage('welcome', e)} 
                    style={{ color: "white", marginRight: "20px", textDecoration: "none", fontWeight: "bold" }}
                >
                     Welcome 👋
                </a>
                <a 
                    href="/Compteur_de_click" 
                    onClick={(e) => changerPage('compteur', e)} 
                    style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
                >
                     Compteur de click 📊
                </a>
            </nav>

            {/* --- 2. exercice sur l'âge --- */}
            {/* <Majeur />  */}

            {/* --- 3. L'AFFICHAGE DES PAGES --- */}
            <hr />
            
            {/* J'utilise la variable currentPage directement (sans this.state) */}
            {currentPage === 'accueil' && <Accueil />}
            
            {currentPage === 'contact' && <Contact />}

            {currentPage === 'welcome' && <Welcome />}
            
            {currentPage === 'compteur' && <Compteur_de_click />}
        </div>
    );
}

export default App;