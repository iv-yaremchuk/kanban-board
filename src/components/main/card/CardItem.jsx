import React from 'react';
import './style.css';

// import Modal from '../modal/Modal';
import { Link, Outlet, useLocation } from 'react-router-dom';

function CardItem() {
  const location = useLocation();
  return (
    <li className="card__item">
      <Link to="/modal/1" state={{ background: location }}>
        <h2 className="card__subtitle">Login page – performance issues</h2>
      </Link>
      <Outlet />
    </li>
  );
}

export default CardItem;