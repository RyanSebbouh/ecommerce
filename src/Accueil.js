import React, { Component } from 'react';
// On importe tes anciens exercices pour qu'ils soient sur la page d'accueil
import ProductList from './ProductList';
import Welcome from './Welcome';
import GuessNumber from './GuessNumber';

class Accueil extends Component {
    render() {
        return (
            <div>
                <h2>Bienvenue sur l'Accueil</h2>
                <p>Retrouvez ici tous mes exercices React.</p>
                
                {/* Tes anciens composants */}
                <GuessNumber />
                <Welcome description="Super promo !" />
                <ProductList />
            </div>
        );
    }
}

export default Accueil;