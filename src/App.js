import React, { Component } from 'react';
import './App.css';
import Accueil from './Accueil';
import Contact from './Contact';
import Majeur from './Majeur';
// import CompteurDePersonne from './CompteurDePersonne'; 

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'accueil'
        };
    }

    changerPage = (nomPage, event) => {
        // Cette fonction empêche le rechargement de la page (comportement par défaut des liens)
        event.preventDefault(); 
        this.setState({ currentPage: nomPage });
    }

    render() {
        return (
            <div className="App">
                {/* --- 1. La Navigation (Toujours visible) --- */}
                <nav style={{ padding: "15px", backgroundColor: "#333", color: "white", marginBottom: "20px" }}>
                    <a 
                        href="/" 
                        onClick={(e) => this.changerPage('accueil', e)} 
                        style={{ color: "white", marginRight: "20px", textDecoration: "none", fontWeight: "bold" }}
                    >
                        🏠 Accueil
                    </a>
                    <a 
                        href="/contact" 
                        onClick={(e) => this.changerPage('contact', e)} 
                        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
                    >
                        ✉️ Contact
                    </a>
                </nav>

                {/* --- 2. Ton exercice sur l'âge (Toujours visible aussi) --- */}

                {/* --- 3. L'AFFICHAGE DES PAGES (C'est ce qu'il manquait !) --- */}
                <hr />
                
                {/* Si le state est 'accueil', on affiche le composant Accueil */}
                {this.state.currentPage === 'accueil' && <Accueil />}

                {/* Si le state est 'contact', on affiche le composant Contact */}
                {this.state.currentPage === 'contact' && <Contact />}
        
            </div>
        );
    }
}

export default App;