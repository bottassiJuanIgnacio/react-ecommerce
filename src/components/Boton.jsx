import React, { useState, useEffect } from "react";


export default function Boton({conteoInicial, color}) {

    
    const [contador, setContador] = useState(5);
    console.log(contador);
    
  return (
    <div>
        <h1 style={{color : color }}> CONTADOR : {contador}</h1>
        <button style={{color : "#343a40", backgroundColor : "#ffc107"}} onClick= {() => 
        setContador(contador + 1)}
         > SUMAR </button>
    </div>
  )
}
