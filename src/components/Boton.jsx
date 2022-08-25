import React, { useState} from "react";
//, useEffect 

export default function Boton({inicial, warning}) {
  
    
    const [contador, setContador] = useState(5);
    console.log(contador);
    
  return (
    <div>
        <h1 style={{color : warning }}> CONTADOR : {contador}</h1>
        <button style={{color : "#343a40", backgroundColor : warning}} onClick= {() => 
        setContador(contador + 1)}
         > SUMAR </button>
    </div>
  )
}
