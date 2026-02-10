import React from 'react';

function Magasin(props) {
    // La logique reste la même
    const isOuvert = props.hour >= 9 && props.hour <= 18;

    return (
        // On utilise la classe CSS pour la boîte
        <div className="magasin-card">
            <h3>Horaire : {props.hour}h</h3>
            
            {/* ASTUCE : On construit le className dynamiquement !
                Si ouvert -> className="statut-magasin ouvert"
                Si fermé -> className="statut-magasin ferme"
            */}
            <p className={isOuvert ? "statut-magasin ouvert" : "statut-magasin ferme"}>
                {isOuvert ? "Magasin ouvert" : "Magasin fermé"}
            </p>
        </div>
    );
}

export default Magasin;