import { collection, doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase/Firebase'
import ItemDetail from './ItemDetail'
//import { data } from '../mocks/dataBase'

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail]= useState({})
    const [loading, setLoading]= useState(true)
    const{id}=useParams()

     
    

    //firebase

    useEffect(()=>{
      //le decimos nuestra base de datos y en que collecion tiene que ir
      const coleccionProd = collection(db, "products")
      // hacer una referencia que me traiga el ID del useParams
      const referenciaDoc = doc(coleccionProd, id)
      //traemos el documento
      getDoc(referenciaDoc)
      .then((result)=>{
        setProductDetail({
          id:result.id,
          ...result.data()
        })
      })
      .catch((error)=> console.log(error))
      .finally(()=> setLoading(false))
    }, [])
   
  return (
    <div>
       {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}

export default ItemDetailContainer