import React from 'react';
import '@fontsource/roboto/400.css';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <Header />
      <Main tasks={tasks} setTasks={setTasks} />
      <Footer tasks={tasks} setTasks={setTasks} />
    </Router>
  );
}

export default App;
