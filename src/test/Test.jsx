import React, {useState, useEffect} from 'react'
import Loader from './Loader';


export default function Test() {
    const[resultado, setResultado] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState();


    useEffect(() => {
        fetch("https://fakestoreapi.com/products/").then((res) => res.json())
        .then((json) => {
            console.log(json);
            setResultado(json);
        })
        .catch(e => {
            console.log(e);
        })
        .finally(() => {
            setLoading(false);
        })
    },[]);


  return (
    <>
        <Loader isLoading={loading ? true : false} msg={loading ? 'Loading...' : 'Ready'} />
    </>
  )
}
