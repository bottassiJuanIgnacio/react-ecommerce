import './App.css';
// css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className='bg-dark'>
      <NavBar />
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
