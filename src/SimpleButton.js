import React from 'react';

function SimpleButton() {
    
    // Je définis la fonction qui se déclenchera au clic
    const handleClick = () => {
        alert("hey you");
    }

    return (
        // J'attache l'événement onClick à ma fonction
        <button onClick={handleClick}>
            Appuie ici !
        </button>
    );
}

export default SimpleButton;