import React, { Component } from 'react';

class GuessNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombreMystere: Math.floor(Math.random() * 100) + 1,
            valeurSaisie: '',
            message: ''
        };
    }

    handleInput = (event) => {
        this.setState({ valeurSaisie: event.target.value });
    }

    verifier = () => {
        const saisie = parseInt(this.state.valeurSaisie, 10);
        const mystere = this.state.nombreMystere;

        if (isNaN(saisie)) {
            this.setState({ message: "Veuillez entrer un nombre valide" });
        } else if (saisie > mystere) {
            this.setState({ message: "Yo my brother le nombre est plus petit 👇" });
        } else if (saisie < mystere) {
            this.setState({ message: "Yo my brother le nombre est plus grand 👆" });
        } else {
            this.setState({ message: "C'est juste my brother 🎉" });
        }
    }

    render() {
        return (
            // On utilise la classe CSS définie plus haut
            <div className="guess-game">
                <h2>Jeu du Plus ou Moins</h2>
                <p>Devine le nombre entre 1 et 100</p>

                {/* Champ de formulaire */}
                <input 
                    type="number" 
                    value={this.state.valeurSaisie}
                    onChange={this.handleInput}
                    placeholder="Entrez un nombre"
                    className="guess-input"
                />

                <button onClick={this.verifier} className="guess-btn">
                    Deviner
                </button>

                {/* Zone de résultat */}
                <p className="guess-message">
                    {this.state.message}
                </p>
            </div>
        );
    }
}

export default GuessNumber;