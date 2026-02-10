import React, { Component } from 'react';

// --- J'importe les composants enfants (mais pas Accueil !) ---
import CompteurDePersonne from './CompteurDePersonne';
import ProductList from './ProductList';
import Welcome from './Welcome';
import GuessNumber from './GuessNumber';
import Majeur from './Majeur';

class Accueil extends Component {
    render() {
        return (
            <div className="accueil-container">
                <h2>Bienvenue sur l'Accueil</h2>
                <p>Retrouvez ici tous mes exercices React.</p>
                
                {/* --- 1. L'âge --- */}
                <div className="majeur-container" style={{border: "1px solid red", padding: "10px", margin: "20px"}}>
                    <h3>L'age</h3>
                    <Majeur age={20} />
                </div>

                <hr />

                {/* --- 2. Le Compteur --- */}
                <div style={{ margin: "20px" }}>
                     <CompteurDePersonne />
                </div>

                <hr />

                {/* --- 3. Les autres exercices --- */}
                <GuessNumber />
                <hr />
                <Welcome description="Super promo !" />
                <ProductList />

            </div>
        );
    }
}

export default Accueil;