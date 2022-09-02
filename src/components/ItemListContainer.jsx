import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const productsHC = [{}]

export default function ItemListContainer(props) {
    const {warning, greeting} = props
    const {idcategory, idproduct} = useParams();
    const [products, setProducts] = useState();

      useEffect(() => {
        if (!idcategory){
          setProducts(productsHC);
        }else {
          setProducts(productsHC.filter(product => product.idcategory == idcategory))
        }

      }, [idcategory]);


  return (
    <div>
        <h3 style={{color : warning}}>{greeting}!!</h3>
    </div>
  )
}
