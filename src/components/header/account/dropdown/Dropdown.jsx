import React from 'react';
import './style.css';

function Dropdown() {
  return (
    <nav className="dropdown-menu">
      <ul className="dropdown-menu__list">
        <li className="dropdown-menu__item">
          <a href='/' className="dropdown-menu__link">
            Profile
          </a>
        </li>
        <li className="dropdown-menu__item">
          <a href='/' className="dropdown-menu__link">
            Log Out
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Dropdown;