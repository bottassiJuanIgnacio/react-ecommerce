import React, { useState } from "react";


export default function ItemCount({initial, warning, stock, onAdd}) {
  
    
  const [contador, setContador] = useState(initial);
    
 

    
  return (
    <div>
        <h1 style={{color : warning }}> CONTADOR : {contador}</h1>

        <button className='btn btn-danger' style={{color : "#343a40", backgroundColor : warning}} onClick= {() => {
          setContador(contador <= initial ? setContador:  contador - 1);
        } }> - </button>

        <button className='btn btn-success' style={{color : "#343a40", backgroundColor : warning}} onClick= {() => {
        setContador(contador < stock ? contador + 1 :  setContador);
        } }> + </button>



        <button className='btn btn-primary m-3' onClick={ onAdd} > Agregar al carrito </button>
    </div>
  )
}
