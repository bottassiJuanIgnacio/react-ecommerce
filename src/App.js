import './App.css';
// css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import {CartProvider} from './context/CartContext';
import Checkout from './components/Checkout';
// shift alt o
import Eventos from './test/Eventos';
import Test from './test/Test';


function App() {
  
  const warning = "#ffc107";
  const greeting = 'Hello Gyro';

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          
          <Route path='/' element={<ItemListContainer warning ={warning} greeting= {greeting}/>}/>
          <Route path='/category/:categoriaId' element={<ItemListContainer />} />
          <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
