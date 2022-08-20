import React from 'react'

export default function Cards() {
  return (
    <div className="card d-flex justify-content-around text-bg-secondary margin-5rem" style={{ width: '18rem' }}>
  <img src="https://via.placeholder.com/350x350" className="card-img-top" alt="placeholder" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush ">
    <li className="list-group-item text-bg-secondary">An item</li>
    <li className="list-group-item text-bg-secondary">A second item</li>
    <li className="list-group-item text-bg-secondary">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link text-bg-secondary">Card link</a>
    <a href="#" className="card-link text-bg-secondary">Another link</a>
  </div>
</div>
  )
}
