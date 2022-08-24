import './App.css';
// css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Boton from './components/Boton';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  let inicial = 15;
  let color = "#ffc107";
  return (
    <div className='bg-dark'>
      <NavBar />
      <Boton  conteoInicial={inicial} color ={color}/>
      <div className="d-flex justify-content-around ">
        <Cards />
        <Cards />
        <Cards />
      </div>
      <Footer />
    </div>
  );
}

export default App;
