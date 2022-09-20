import React from 'react'
import { useCart } from '../context/CartContext';

export default function CartWidget() {
  const{cartQuantity, cart} =useCart()
  return (
    <div>
        <span>{cartQuantity() || ''}</span>
    </div>
  )
}
