import React, { useState, useEffect } from 'react';

// Correction : J'ai harmonisé le nom (avec le 'c' à la fin)
function Compteur_de_click() {
    // 1. Je déclare mon state
    const [compteur, setCompteur] = useState(0);

    // 2. Le useEffect : S'exécute APRÈS que le composant soit affiché
    useEffect(() => {
        // Cette alerte arrive en dernier
        alert(`Mise à jour terminée ! Compteur : ${compteur}`);
    });

    // 3. L'alerte directe : S'exécute PENDANT la lecture du code
    // Cette alerte arrive en premier et bloque l'affichage tant qu'on ne clique pas sur OK
    alert("Je suis l'alerte avant le return");

    return (
        <div>
            <p>Yo brother tu as cliqué {compteur} fois</p>
            <button onClick={() => setCompteur(compteur + 1)}>
                Clique Brother
            </button>
        </div>
    );
}

export default Compteur_de_click;