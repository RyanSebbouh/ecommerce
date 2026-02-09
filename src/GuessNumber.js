import React, { Component } from 'react';

class GuessNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 1. On choisit le nombre aléatoire au lancement (entre 1 et 100)
            nombreMystere: Math.floor(Math.random() * 100) + 1,
            valeurSaisie: '', // Ce que l'utilisateur tape
            message: ''       // Le résultat (Plus grand / Plus petit)
        };
    }

    // Cette fonction s'active quand l'utilisateur écrit dans le champ
    handleInput = (event) => {
        this.setState({ valeurSaisie: event.target.value });
    }

    // Cette fonction compare le nombre saisi avec le nombre mystère
    verifier = () => {
        const saisie = parseInt(this.state.valeurSaisie, 10); // On convertit le texte en entier
        const mystere = this.state.nombreMystere;

        if (isNaN(saisie)) {
            this.setState({ message: "Veuillez entrer un nombre valide" });
        } else if (saisie > mystere) {
            this.setState({ message: "Le nombre est plus petit 👇" });
        } else if (saisie < mystere) {
            this.setState({ message: "Le nombre est plus grand 👆" });
        } else {
            this.setState({ message: "C'est juste ! 🎉 Bravo !" });
        }
    }

    render() {
        return (
            <div style={{ border: "2px solid orange", padding: "20px", margin: "20px", borderRadius: "10px" }}>
                <h2>Jeu du Plus ou Moins</h2>
                <p>Devine le nombre entre 1 et 100</p>

                {/* Champ de formulaire */}
                <input 
                    type="number" 
                    value={this.state.valeurSaisie}
                    onChange={this.handleInput} // C'est l'équivalent React de onInput
                    placeholder="Entrez un nombre"
                    style={{ padding: "8px", marginRight: "10px" }}
                />

                <button onClick={this.verifier} style={{ padding: "8px 15px", cursor: "pointer" }}>
                    Deviner
                </button>

                {/* Zone de résultat */}
                <p style={{ fontWeight: "bold", fontSize: "18px", marginTop: "15px" }}>
                    {this.state.message}
                </p>
            </div>
        );
    }
}

export default GuessNumber;