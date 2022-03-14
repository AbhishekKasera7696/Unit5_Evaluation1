import './App.css';
import Vegetables from './Components/vegetable';
import Wishlist from './Components/Wishlist';


function App() {
  return (
    <div className = 'big-container'>
    <div>
      <Vegetables name="Tomatoes"/>
      <Vegetables name="Potatoes"/>
      <Vegetables name="Carrots"/>
      <Vegetables name="Onions"/>
    </div>

    <div><Wishlist/></div>

    </div>
  );
}

export default App;