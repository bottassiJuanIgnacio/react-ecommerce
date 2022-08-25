import './App.css';
// css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Boton from './components/Boton';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';




function App() {
  const inicial = 15;
  const warning = "#ffc107";
  const greeting = 'Hello Gyro';

  return (
    <div className='bg-dark'>
      <NavBar />
      <ItemListContainer warning ={warning} greeting= {greeting}/>
      <Boton  conteoInicial={inicial} warning ={warning}/>
      <div className="d-flex justify-content-around ">
        <Cards style={{margin : '5px'}} />
        <Cards />
        <Cards />
      </div>
      <Footer />
    </div>
  );
}

export default App;
