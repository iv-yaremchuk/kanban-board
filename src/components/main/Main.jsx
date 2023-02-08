import React from 'react';
import './style.css';
import Card from './card/Card';
import { BrowserRouter as Router } from 'react-router-dom';

function Main() {
  return (
    <>
      <main className="main">
        <Router>
          <Card title="Backlog" />
          <Card title="Ready" />
        </Router>
          {/* <Card title="Ready" />
          <Card title="In Progress" />
          <Card title="Finished" /> */}
      </main>
    </>
  );
}

export default Main;
