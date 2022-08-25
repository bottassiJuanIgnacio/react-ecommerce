import React from 'react'

export default function ItemListContainer(props) {
    const {warning, greeting} = props
  return (
    <div>
        <h3 style={{color : warning}}>{greeting}!!</h3>
    </div>
  )
}
