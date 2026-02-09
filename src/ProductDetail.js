// src/ProductDetail.js

function ProductDetail(props) {
    return (
        <div>
            {/* J'affiche les données reçues via les props */}
            <h2>Nom du produit : {props.nom}</h2>
            <p>Description : {props.description}</p>
            <p>Prix : {props.prix} €</p>
            <p>Quantité disponible : {props.quantité}</p>
        </div>
    );
}

// J'exporte mon composant pour qu'App.js puisse l'utiliser
export default ProductDetail;