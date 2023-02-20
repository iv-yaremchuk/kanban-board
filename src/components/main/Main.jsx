import React from 'react';
import './style.css';
import Card from './card/Card';
import Modal from '../main/modal/Modal';
import { Route, Routes, useLocation } from 'react-router-dom';

function Main(props) {
  const { tasks, setTasks } = props;
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <main className="main">
      <Routes location={background || location}>
        <Route path="/" element={<Card tasks={tasks} setTasks={setTasks} />}>
          <Route path="/tasks/:id" element={<Modal />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/tasks/:id"
            element={<Modal tasks={tasks} setTasks={setTasks} />}
          />
        </Routes>
      )}
    </main>
  );
}

export default Main;
