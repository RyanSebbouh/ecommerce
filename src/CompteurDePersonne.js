import React, { Component } from 'react';

class CompteurDePersonne extends Component {
    constructor(props) {
        super(props);
        this.state = { nombre: 0 };
    }

    entrer = () => {
        // Incrémentation sécurisée
        this.setState((prevState) => ({ nombre: prevState.nombre + 1 }));
    }

    sortir = () => {
        // Décrémentation sécurisée
        if (this.state.nombre > 0) {
            this.setState((prevState) => ({ nombre: prevState.nombre - 1 }));
        }
    }

    render() {
        return (
            <div className="card">
                <h2>Compteur</h2>
                
                <h1>{this.state.nombre}</h1>
                
                {/* 👇 REGARDE ICI : Pas de parenthèses () après le nom de la fonction ! */}
                <button onClick={this.entrer} className="btn-action"> + </button>
                <button onClick={this.sortir} className="btn-action"> - </button>

                {this.state.nombre > 10 && (
                    <p className="message-alerte">
                        ⚠️ La pièce est pleine !
                    </p>
                )}
            </div>
        );
    }
}

export default CompteurDePersonne;