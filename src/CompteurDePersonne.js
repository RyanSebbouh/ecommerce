import React, { Component } from 'react';

class CompteurDePersonne extends Component {
    constructor(props) {
        super(props);
        // 1. On initialise l'état avec 0 personne au début
        this.state = {
            nombre: 0
        };
    }

    // Fonction pour faire entrer quelqu'un
    entrer = () => {
        this.setState({ nombre: this.state.nombre + 1 });
    }

    // Fonction pour faire sortir quelqu'un
    sortir = () => {
        // On évite les nombres négatifs (optionnel mais plus propre)
        if (this.state.nombre > 0) {
            this.setState({ nombre: this.state.nombre - 1 });
        }
    }

    render() {
        return (
            <div style={{ border: "2px solid blue", padding: "20px", margin: "20px", textAlign: "center" }}>
                <h2>Compteur de visiteurs</h2>
                
                {/* Affichage du nombre actuel */}
                <h1 style={{ fontSize: "50px", margin: "10px" }}>
                    {this.state.nombre}
                </h1>

                {/* Les deux boutons */}
                <button onClick={this.entrer} style={{ marginRight: "10px", padding: "10px" }}>
                    + Entrer
                </button>
                <button onClick={this.sortir} style={{ padding: "10px" }}>
                    - Sortir
                </button>

                {/* 2. Affichage conditionnel : Le message n'apparaît que si > 10 */}
                {this.state.nombre > 10 && (
                    <p style={{ color: "red", fontWeight: "bold", marginTop: "15px" }}>
                        ⚠️ La pièce est pleine !
                    </p>
                )}
            </div>
        );
    }
}

export default CompteurDePersonne;