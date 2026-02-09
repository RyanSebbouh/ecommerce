import React, { Component } from 'react';

class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    // 1. S'exécute UNE SEULE FOIS, juste après que le composant est affiché (Montage)
    componentDidMount() {
        console.log("Montage terminé"); // Je mets un log aussi, c'est plus pratique que les alertes parfois
        alert("The component was just displayed");
    }

    // 3. S'exécute à chaque fois que les props ou le state changent (Mise à jour)
    componentDidUpdate() {
        console.log("Mise à jour détectée");
        alert("Component was updated");
    }

    // 4. S'exécute juste avant que le composant soit retiré de l'écran (Démontage)
    componentWillUnmount() {
        alert("Le composant va être détruit");
    }

    render() {
        return (
            <div className="welcome-message" style={{border: '2px solid red', padding: '10px', margin: '10px'}}>
                <h1>Hello class component</h1>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

export default Welcome;