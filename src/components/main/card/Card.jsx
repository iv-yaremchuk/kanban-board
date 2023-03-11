import React from 'react';
import './style.css';
import CardItem from './CardItem';
import uniqid from 'uniqid';

function Card(props) {
  const { tasks, setTasks } = props;

  const LIST_TYPES = {
    BACKLOG: 'backlog',
    IN_PROGRESS: 'inProgress',
    READY: 'ready',
    FINISHED: 'finished',
  };
  const LIST_TYPES_COPY = {
    [LIST_TYPES.BACKLOG]: 'Backlog',
    [LIST_TYPES.IN_PROGRESS]: 'In progress',
    [LIST_TYPES.READY]: 'Ready',
    [LIST_TYPES.FINISHED]: 'Finished',
  };

  const createNewTask = (title) => {
    const newTask = {
      id: uniqid(),
      title,
      description: '',
      created: new Date().toISOString(),
      status: LIST_TYPES.BACKLOG,
    };
    setTasks([...tasks, newTask]);
  };

  const moveTask = Object.values(LIST_TYPES).map((type) => {
    const listTasks = tasks.filter((task) => task.status === type);
    const prevTaskList = tasks.filter(
      (task) =>
        task.status ===
        Object.values(LIST_TYPES)[Object.values(LIST_TYPES).indexOf(type) - 1]
    );

    return (
      <CardItem
        key={LIST_TYPES_COPY[type]}
        type={type}
        title={LIST_TYPES_COPY[type]}
        tasks={listTasks || []}
        setTasks={setTasks}
        createNewTask={createNewTask}
        prevTaskList={prevTaskList}
      />
    );
  });

  return <>{moveTask}</>;
}

export default Card;
