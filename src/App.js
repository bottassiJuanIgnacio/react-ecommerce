import './App.css';
// css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import Promesas from './test/Promesas';
import Eventos from './test/Eventos';
import FetchContainer from './test/FetchContainer';
import FetchArrayContainer from './test/FetchArrayContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// shift alt o



function App() {
  const initial = 1;
  const stock = 10;
  const onAdd = () => { alert("Agregar al carrito productos")};
  const warning = "#ffc107";
  const greeting = 'Hello Gyro';

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/eventos' element={<Eventos />} />
        <Route path='/' element={<ItemListContainer warning ={warning} greeting= {greeting}/>}/>
        <Route path='/category/:idcategory' element={<ItemListContainer />} />
        <Route path='/product/:idproduct' element={<Cards style={{margin : '5px'}} />} />
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>
    // <div className='bg-dark'>
    //   <NavBar />
    //   <ItemListContainer warning ={warning} greeting= {greeting}/>
    //   <ItemCount  initial={initial} warning ={warning} stock ={stock} onAdd= {onAdd} />
    //   <div className="d-flex justify-content-around ">
    //     <Cards style={{margin : '5px'}} />
    //     <Cards />
    //     <Cards />
    //   </div>
    //   <FetchContainer />
    //   {/* <FetchArrayContainer /> */}
    //   <Promesas />
    //   <Footer />
    // </div>
    // <>
    //   <BrowserRouter>
    //     {/*Aca van todos los componentes presentes en todas las rutas*/}
    //     <NavBar />
    //     <Routes>
    //       <Route path='/' element={<ItemListContainer />} />
    //       <Route path='/category/:idcategory' element={<ItemListContainer />}/>
    //       <Route path='/product/:idproduct' element={<ItemListContainer />}{<Cards />}/>{/*ItemDetailContainer*/}
    //     </Routes>
    //     <Footer />
    //   </BrowserRouter>
    // </>

  );
}

export default App;
