import React from 'react';
import Account from './account/Account';
// import {Link} from 'react-router-dom'
import './style.css'


function Header () {
  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Awesome Kanban Board</h1>
        <Account />
      </header>
    </>
  )
}

export default Header;