import './App.css';
// css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Promesas from './test/Promesas';
import FetchContainer from './test/FetchContainer';




function App() {
  const initial = 1;
  const stock = 10;
  const onAdd = () => { alert("Agregar al carrito productos")};
  const warning = "#ffc107";
  const greeting = 'Hello Gyro';

  return (
    <div className='bg-dark'>
      <NavBar />
      <ItemListContainer warning ={warning} greeting= {greeting}/>
      <ItemCount  initial={initial} warning ={warning} stock ={stock} onAdd= {onAdd} />
      <div className="d-flex justify-content-around ">
        <Cards style={{margin : '5px'}} />
        <Cards />
        <Cards />
      </div>
      <FetchContainer />
      <Promesas />
      <Footer />
    </div>
  );
}

export default App;
