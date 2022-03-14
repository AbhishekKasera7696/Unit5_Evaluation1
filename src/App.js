import './App.css';
import Vegetables from './Components/vegetable';
import Wishlist from './Components/Wishlist';


function App() {
  return (
    <div className = 'big-container'>
      <div>
       <Vegetables name="Tomatoes" startCount = {10}/>
       <Vegetables name="Potatoes" startCount = {8} />
       <Vegetables name="Carrots"  startCount = {5}/>
       <Vegetables name="Onions"  startCount = {7}/>
     </div>

     <div><Wishlist/></div>

   </div>
  );
}

export default App;