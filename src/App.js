import './App.css';
// J'importe la LISTE (le parent) et non plus le produit seul
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <h1>Bienvenue sur mon shop</h1>
      
      {/* J'affiche ma liste de produits */}
      <ProductList />
    </div>
  );
}

export default App;