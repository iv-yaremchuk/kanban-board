import React, { useState, useRef } from 'react';
import './style.css';
import { Link, Outlet, useLocation } from 'react-router-dom';

function CardItem(props) {
  const { type, tasks, setTasks, createNewTask, prevTaskList } = props;
  const location = useLocation();
  const [active, setActive] = useState(false);
  const inputValueRef = useRef(null);

  const AddButton = (
    <button
      onClick={() => {
        setActive(true);
      }}
      className={
        prevTaskList.length || props.title === 'Backlog'
          ? 'card__btn--add is-active'
          : 'card__btn--add'
      }
    >
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
  );

  function CardItemFormOrSelect() {
    const handleSubmit = (e) => {
      e.preventDefault();
      if (inputValueRef.current.value.trim()) {
        createNewTask(inputValueRef.current.value);
      }
      setActive(false);
    };

    const statusChange = (e, status) => {
      const tasksList = JSON.parse(window.localStorage.getItem('tasks'));
      const tasksCopy = tasksList.map((task) => {
        if (task.id === e.target.value) {
          task.status = status;
        }
        return task;
      });
      setTasks(tasksCopy);
      setActive(false);
    };

    if (type === 'backlog') {
      return (
        <form onSubmit={handleSubmit} className="card__form">
          <input
            type="text"
            id="title"
            className="card__input"
            ref={inputValueRef}
          />
          <button type="submit" className="card__btn--submit">
            Submit
          </button>
        </form>
      );
    } else {
      return (
        <select
          className="card__select"
          onChange={(e) => statusChange(e, type)}
        >
          <option value={'default'}>Select task</option>
          {prevTaskList.map((task) => {
            return (
              <option className='card__option' key={task.id} value={task.id}>
                {task.title}
              </option>
            );
          })}
        </select>
      );
    }
  }

  return (
    <div className="card">
      <h2 className="card__title">{props.title}</h2>
      <ul className="card__list">
        {tasks.length ? (
          tasks.map((task) => (
            <li key={task.id} className="card__item">
              <Link className='card__link' to={`/tasks/${task.id}`} state={{ background: location }}>
                <h2 className="card__subtitle">{task.title}</h2>
              </Link>
              <Outlet />
            </li>
          ))
        ) : (
          <p className='card__text'>No tasks added yet</p>
        )}
      </ul>
      {!active ? AddButton : <CardItemFormOrSelect />}
    </div>
  );
}

export default CardItem;
