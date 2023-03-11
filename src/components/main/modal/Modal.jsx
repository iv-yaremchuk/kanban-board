import React, { useState } from 'react';
import './style.css';
import { useNavigate, useParams } from 'react-router-dom';
import FocusTrap from 'focus-trap-react';

function Modal(props) {
  const { tasks, setTasks } = props;
  const { id } = useParams();

  const task = JSON.parse(window.localStorage.getItem('tasks')).find(
    (task) => task.id === id
  );

  const navigate = useNavigate();
  const [description, setDescription] = useState(
    task.description ? task.description : 'This task has no description'
  );

  const addDescription = () => {
    const tasksCopy = tasks.map((elem) => {
      if (elem.id === id) {
        elem.description = description;
      }
      return elem;
    });
    setTasks(tasksCopy);
  };

  return (
    <FocusTrap>
      <div className="modal">
        <div className="modal__wrap">
          <h2 className="modal__title">{task.title}</h2>
          <textarea
            className="modal__text"
            onFocus={() => {
              description === 'This task has no description' &&
                setDescription('');
            }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            onBlur={addDescription}
          ></textarea>
          <button onClick={() => navigate(-1)} className="modal__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <line
                x1="1.35355"
                y1="0.646447"
                x2="24.3536"
                y2="23.6464"
                stroke="black"
              />
              <line
                y1="-0.5"
                x2="32.5269"
                y2="-0.5"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 24 1)"
                stroke="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </FocusTrap>
  );
}

export default Modal;
