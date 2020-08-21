import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContex';
import Task from './Task';

const TaskList: React.FC = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <React.Fragment>
      {tasks.length ? (
        <ul className='list'>
          {tasks.map(task => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className='no-tasks'>No tasks to do...</div>
      )}
    </React.Fragment>
  );
};

export default TaskList;
