import React from 'react';

function AddProduct() {

    // Exercice 2 : Gérer le changement du nom 
    const handleNameChange = (event) => {
        // Je récupère la valeur actuelle du champ input
        console.log("Saisie en cours :", event.target.value);
    }

    // --- Exercice 3 : Gérer la soumission ---
    const handleSubmit = (event) => {
        // IMPORTANT : J'empêche le navigateur de recharger la page
        event.preventDefault(); 
        
        console.log("Formulaire envoyé (sans rechargement) !");
        alert("Produit ajouté !");
    }

    return (
        // J'attache onSubmit sur la balise <form>, pas sur le bouton !
        <form onSubmit={handleSubmit} style={{ border: "2px solid #333", padding: "20px", margin: "20px" }}>
            <h3>Ajouter un produit</h3>

            {/* Input Nom : Je surveille chaque changement avec onChange */}
            <label>Nom : </label>
            <input 
                type="text" 
                placeholder="Nom du produit" 
                onChange={handleNameChange} 
            />
            
            <br /><br />

            {/* Input Description */}
            <label>Description : </label>
            <input 
                type="text" 
                placeholder="Description du produit" 
            />
            
            <br /><br />

            <button type="submit">Valider</button>
        </form>
    );
}

export default AddProduct;