import React, { useState } from "react";


export default function ItemCount({initial, warning, stock, onAdd}) {
  
    
  const [contador, setContador] = useState(initial);
    
 

    
  return (
    <div>
        <h1 style={{color : warning }}> CONTADOR : {contador}</h1>


        <button style={{color : "#343a40", backgroundColor : warning}} onClick= {() => {
        setContador(contador < stock ? contador + 1 :  setContador);
        } }> + </button>



        <button style={{color : "#343a40", backgroundColor : warning}} onClick= {() => {
        setContador(contador <= initial ? setContador:  contador - 1);
      } }> - </button>
        <button onClick={ onAdd} > Agregar al carrito </button>
    </div>
  )
}
