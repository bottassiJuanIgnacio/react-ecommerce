import React, { useState, useEffect }
from 'react'

export default function Eventos() {
    const [email, setEmail] = useState('');


    function handleClick(e) {
        console.log(e);

    };
    const vocales = ["a", "e", "i", "o", "u"];

    function handle (e) {
        if (vocales.find(vocal => vocal  === e.key)){
            e.preventDefault();
        }
    }


  return (
    <>
    <div onClick={handleClick} style={{border: '3px solid red', padding: '20px', margin: '20px'}}>Eventos
    
    <input onKeyDown={handle} type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'ingrese su email'} />
    {email}
    
    </div>
    

    </>
  )
}
