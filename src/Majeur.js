import React, { Component } from 'react';

class Majeur extends Component {
    render() {
        const age = this.props.age;

        // Si l'âge est supérieur ou égal à 18
        if (age >= 18) {
            return (
                // On utilise la classe CSS "resultat-majeur" (Vert)
                <div className="resultat-majeur">
                    ✅ Il est majeur, son age est {age} ans.
                </div>
            );
        } 
        // Sinon
        else {
            return (
                // On utilise la classe CSS "resultat-mineur" (Orange)
                <div className="resultat-mineur">
                    👶 Il est mineur, son age est {age} ans.
                </div>
            );
        }
    }
}

export default Majeur;