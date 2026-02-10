// src/Magasin.js
import React from 'react';

function Magasin(props) {
    // on vérifie si l'heure est comprise entre 9 et 18
    const isOuvert = props.hour >= 9 && props.hour <= 18;

    return (
        <div style={{ border: "1px solid #333", padding: "10px", margin: "10px", width: "200px" }}>
            <h3>Horaire : {props.hour}h</h3>
            
            {/* Affichage conditionnel avec l'opérateur ternaire */}
            <p style={{ color: isOuvert ? "green" : "red", fontWeight: "bold" }}>
                {isOuvert ? "Magasin ouvert" : "Magasin fermé"}
            </p>
        </div>
    );
}

export default Magasin;