import React from 'react';
import './style.css';
import CardItem from './CardItem';
import Modal from '../modal/Modal';
import { Route, Routes, useLocation } from 'react-router';


function Card(props) {
  const location = useLocation();
  const background = location.state && location.state.background;
  
  return (
    <div className="card">
      <h2 className="card__title">{props.title}</h2>
      <ul className="card__list">
        <Routes location={background || location}>
          <Route path="/" element={<CardItem />}>
            <Route path='modal/1' element={<Modal />} /> 
          </Route>
        </Routes>
        {background && (
          <Routes>
            <Route path='modal/1' element={<Modal />}/>
          </Routes>
        )}
        <CardItem />
      </ul>
      <button className="card__btn">
        <svg
          className="btn-icon"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 6H8V1C8 0.448 7.552 0 7 0C6.448 0 6 0.448 6 1V6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H6V13C6 13.552 6.448 14 7 14C7.552 14 8 13.552 8 13V8H13C13.552 8 14 7.552 14 7C14 6.448 13.552 6 13 6Z"
            fill="currentColor"
          />
        </svg>
        Add card
      </button>
    </div>
  );
}

export default Card;
