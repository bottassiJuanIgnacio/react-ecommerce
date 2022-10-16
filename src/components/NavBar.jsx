import React from "react";
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom'


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/'>Gyro</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to='/category/nuevos'>Nuevos</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to='/category/oferta'>Ofertas</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to='/category/vendidos'>Mas Vendidos</NavLink>
        </li>
      </ul>
      <form className="d-flex"  role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success bg-dark" type="buttonbuttonsubmit">Search</button>
      </form>
      <NavLink to='/cart' className="nav-link active">
        <CartWidget />
      </NavLink>
    </div>
  </div>
</nav>

  );
}
