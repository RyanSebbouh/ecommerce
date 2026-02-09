import React, { Component } from 'react';
import './App.css';
import Accueil from './Accueil';
import Contact from './Contact';

class App extends Component {
    constructor(props) {
        super(props);
        // 1. On définit l'état initial : on commence sur l'accueil
        this.state = {
            currentPage: 'accueil'
        };
    }

    // Fonction pour changer de page
    changerPage = (nomPage, event) => {
        // IMPORTANT : preventDefault empêche le lien de recharger la page
        event.preventDefault(); 
        this.setState({ currentPage: nomPage });
    }

    render() {
        return (
            <div className="App">
                {/* --- LE MENU DE NAVIGATION --- */}
                <nav style={{ padding: "15px", backgroundColor: "#333", color: "white", marginBottom: "20px" }}>
                    {/* Lien vers l'Accueil */}
                    <a 
                        href="/" 
                        onClick={(e) => this.changerPage('accueil', e)}
                        style={{ color: "white", marginRight: "20px", textDecoration: "none", fontWeight: "bold" }}
                    >
                        🏠 Accueil
                    </a>

                    {/* Lien vers Contact */}
                    <a 
                        href="/contact" 
                        onClick={(e) => this.changerPage('contact', e)}
                        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
                    >
                        ✉️ Contact
                    </a>
                </nav>

                {/* --- L'AFFICHAGE CONDITIONNEL DES PAGES --- */}
                
                {/* Si currentPage vaut 'accueil', on affiche <Accueil /> */}
                {this.state.currentPage === 'accueil' && <Accueil />}

                {/* Si currentPage vaut 'contact', on affiche <Contact /> */}
                {this.state.currentPage === 'contact' && <Contact />}

            </div>
        );
    }
}

export default App;