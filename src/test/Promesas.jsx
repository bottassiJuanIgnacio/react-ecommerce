import React, {useState, useEffect} from 'react'

export default function Promesas() {

    const [loading, setLoading] = useState(true); 
    const [productos, setProductos] = useState([]); 
    const [error, setError] = useState(''); 


  return (
    <div><h3 className='text-warning'>Promesas</h3></div>
  )
}
