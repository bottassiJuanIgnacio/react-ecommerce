import React,{useState, useEffect} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/Firebase'
//import {data} from '../mocks/dataBase'


const ItemListContainer = ({saludo, warning, greeting}) => {
  const [productList, setProductList]=useState([])
  const [loading, setLoading]= useState(false)
  const{categoriaId}= useParams()

//firebase

useEffect(()=>{
  setLoading(true)
  const coleccionProductos= categoriaId ? query(collection(db, "products"), where("category", "==", categoriaId)) : collection(db, "products")
  getDocs(coleccionProductos)
  .then((result)=> {
    const lista = result.docs.map((producto)=>{
      return{
        id:producto.id,
        ...producto.data()
      }
    })
    setProductList(lista)
  })
  .catch((error)=> console.log(error))
  .finally(()=> setLoading(false))
}, [categoriaId])



  console.log(productList)
  return (
    <div style={{padding:'3rem', backgroundColor: '#212529'}}>
        <p>{saludo}</p>
        <p>{greeting}</p>
      {loading ? <p>Cargando...</p>:<ItemList productList={productList}/>}
    </div>
  )
}

export default ItemListContainer