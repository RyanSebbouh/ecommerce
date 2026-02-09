// src/ProductPreview.js

function ProductPreview(props) {
  return (
    <div className="product">
      {/* J'affiche l'image avec une taille fixe (width) pour faire une miniature */}
      <img 
        src={props.image} 
        alt={props.nom} 
        style={{ width: '150px', height: '100px', objectFit: 'cover' }} 
      />
      
      <h3>{props.nom}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default ProductPreview;