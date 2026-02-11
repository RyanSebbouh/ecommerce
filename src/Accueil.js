import React, { Component } from 'react';

// --- J'importe les composants enfants ---
import CompteurDePersonne from './CompteurDePersonne';
import ProductList from './ProductList';
import Welcome from './Welcome';
import GuessNumber from './GuessNumber';
import Majeur from './Majeur';
import ClickMe from './ClickMe'; // <--- 1. J'AJOUTE L'IMPORT ICI
import CompteurWithHook from './CompteurWithHook';

class Accueil extends Component {
    render() {
        return (
            <div className="accueil-container">
                <h2>Bienvenue sur l'Accueil</h2>
                <p>Retrouvez ici tous mes exercices React.</p>
                
                {/* L'âge */}
                <div className="majeur-container" style={{border: "1px solid red", padding: "10px", margin: "20px"}}>
                    <h3>L'age</h3>
                    <Majeur age={20} />
                </div>

                <hr />

                {/* Le Compteur */}
                <div style={{ margin: "20px" }}>
                     <CompteurWithHook />
                </div>

                <hr />

 

              

                {/* Les autres exercices */}
                <GuessNumber />
                <hr />
                
                
            </div>
        );
    }
}

export default Accueil;