import React from 'react'

export default function Loader({isLoading, msg}) {
  return (
    <div>{isLoading ? msg : 'listo!'}</div>
    
  )
}
