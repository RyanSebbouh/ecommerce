import React, { useState } from 'react'; // 1. On importe le Hook useState

function CompteurWithHook() {
    // 2. On remplace le constructor et this.state par useState
    // [valeurActuelle, fonctionPourModifier] = useState(valeurInitiale)
    const [nombre, setNombre] = useState(0);

    // 3. Fonction pour entrer (plus besoin de 'this')
    const entrer = () => {
        setNombre(nombre + 1);
    }

    // 4. Fonction pour sortir
    const sortir = () => {
        if (nombre > 0) {
            setNombre(nombre - 1);
        }
    }

    // 5. Fonction Reset (Nouvelle consigne)
    const reset = () => {
        setNombre(0);
    }

    return (
        <div className="card" style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
            <h2>Compteur (Hook)</h2>
            
            {/* On affiche la variable directement */}
            <h1>{nombre}</h1>
            
            {/* Les boutons appellent les fonctions sans 'this' */}
            <button onClick={entrer} className="btn-action"> + </button>
            <button onClick={sortir} className="btn-action"> - </button>

            {/* Le bouton Reset demandé */}
            <button 
                onClick={reset} 
                className="btn-action" 
                style={{ backgroundColor: "red", color: "white", marginLeft: "10px" }}
            >
                Reset 0
            </button>

            {/* Le message d'alerte */}
            {nombre > 10 && (
                <p className="message-alerte">
                    ⚠️ La pièce est pleine !
                </p>
            )}
        </div>
    );
}

export default CompteurWithHook;