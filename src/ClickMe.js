import React, { useState, useEffect } from 'react';

function ClickMe() {
    // Correction 1 : J'utilise une const et je respecte la casse (setNClick)
    const [nClick, setNClick] = useState(0);

    // 2. Ajout du hook d'effet
    useEffect(() => {
        // J'affiche la popup à chaque mise à jour
        alert("tu as cliqué, le composant vient d'être mis à jour !");
    });

    return (
        <div>
            <button onClick={() => setNClick(nClick + 1)}>
                {/* Correction 2 : J'ajoute les accolades pour afficher la variable */}
                clicked {nClick} times !
            </button>
        </div>
    );
}

export default ClickMe;