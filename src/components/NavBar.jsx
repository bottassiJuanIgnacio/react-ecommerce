import React from "react";
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

//, { useState, useEffect }
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <Link to="/">Gyro</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="category/creatina" className="nav-link active">Pesas</Link>
        </li>
        <li className="nav-item">
          <Link to="category/creatina" className="nav-link">Creatina</Link>
        </li>
        <li className="nav-item">
          <Link to="category/proteina" className="nav-link">Proteina</Link>
          {/* <a className="nav-link" href="#/">Contacto</a> */}
        </li>
      </ul>
      <form className="d-flex"  role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success bg-dark" type="buttonbuttonsubmit">Search</button>
      </form>
      <CartWidget />
    </div>
  </div>
</nav>

  );
}
