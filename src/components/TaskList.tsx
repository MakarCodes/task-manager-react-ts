import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContex';
import Task from './Task';

const TaskList: React.FC = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <React.Fragment>
      <ul className='list'>
        {tasks.map(task => {
          return <Task taskText={task.task} key={task.id} />;
        })}
      </ul>
    </React.Fragment>
  );
};

export default TaskList;
