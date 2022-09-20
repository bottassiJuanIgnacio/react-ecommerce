import './App.css';
// css bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import Eventos from './test/Eventos';
// shift alt o
import Test from './test/Test';


function App() {
  
  const warning = "#ffc107";
  const greeting = 'Hello Gyro';

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        {/* <Route path="/test"  element= {<Test/>} />
        <Route path='/eventos' element={<Eventos />} /> */}
        <Route path='/' element={<ItemListContainer warning ={warning} greeting= {greeting}/>}/>
        <Route path='/category/:categoriaId' element={<ItemListContainer />} />
        <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
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
