// ProductPreview.js (VERSION CORRIGÉE - sans le bouton)
function ProductPreview(props) {
    const prixNumerique = Number(props.prix) || 0;

    return (
        <div className="product-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '200px' }}>
            <img 
                src={props.image || "https://via.placeholder.com/150"} 
                alt={props.nom} 
                style={{ width: '100%', height: '120px', objectFit: 'cover' }} 
            />
            <h3>{props.nom}</h3>
            <p style={{ fontWeight: 'bold', color: '#2ecc71' }}>
                {prixNumerique.toFixed(2)} €
            </p>
        </div>
    );
}

export default ProductPreview;