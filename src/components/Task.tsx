import React from 'react';

type TaskPropsType = { taskText: string };

const Task: React.FC<TaskPropsType> = ({ taskText }) => {
  return (
    <li className='list-item'>
      <span>{taskText}</span>
      <div>
        <button className='btn-delete task-btn'>
          <i className='fas fa-trash-alt'></i>
        </button>
        <button className='btn-edit task-btn'>
          <i className='fas fa-pen'></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
