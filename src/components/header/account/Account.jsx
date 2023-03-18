import React, { useState } from 'react';
import './style.css';
import avatar from './user-avatar.svg';

function Account() {
  const [state, setState] = useState(true);

  return (
    <>
      <div className="header-account__wrap">
        <button
          onClick={() => {
            setState(!state);
          }}
          className="header-account__btn"
        >
          <img
            className="header-account__avatar"
            src={avatar}
            alt="user's avatar"
          />
        </button>
        <span
          onClick={() => {
            setState(!state);
          }}
          className={
            state ? 'header-account__arrow' : 'header-account__arrow is-active'
          }
        ></span>
      </div>
      <nav className={state ? 'dropdown-menu' : 'dropdown-menu is-active'}>
        <ul className="dropdown-menu__list">
          <li className="dropdown-menu__item">
            <a onFocus={() => {setState(false)}} href="/" className="dropdown-menu__link">
              Profile
            </a>
          </li>
          <li className="dropdown-menu__item">
            <a onBlur={() => {setState(!state)}} href="/" className="dropdown-menu__link">
              Log Out
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Account;
