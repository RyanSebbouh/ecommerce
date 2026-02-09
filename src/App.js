import './App.css';
import ProductDetail from './ProductDetail'; // Ton ancien exercice
import Majeur from './Majeur';               // LE NOUVEAU (à ajouter)

function App() {
  return (
    <div className="App">
      <h1>Mon site e-commerce</h1>
      
      {/* --- TON ANCIEN CODE (Ne pas toucher) --- */}
      <ProductDetail 
        nom="Chocolat" 
        prix={5} 
        description="du bon chocolat noir" 
        quantité={5} 
      />

      <hr /> {/* (Optionnel) Une ligne pour séparer visuellement */}

      {/* --- LE NOUVEL EXERCICE (À ajouter) --- */}
      <h2>Vérification de l'âge :</h2>
      <Majeur age={20} />
      <Majeur age={12} />
      
    </div>
  );
}

export default App;