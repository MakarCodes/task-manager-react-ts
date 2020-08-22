import React, { useContext, useState } from 'react';
import { TaskListContext } from '../context/TaskListContex';
import * as actionTypes from '../reducers/actionTypes';

type TaskPropsType = {
  task: {
    title: string;
    id: string;
  };
};

const Task: React.FC<TaskPropsType> = ({ task }) => {
  const { dispatch, findItem } = useContext(TaskListContext);
  return (
    <li className='list-item'>
      <span>{task.title}</span>
      <div>
        <button
          className='btn-delete task-btn'
          onClick={() => {
            return dispatch({
              type: actionTypes.REMOVE_TASK,
              payload: {
                id: task.id,
              },
            });
          }}
        >
          <i className='fas fa-trash-alt'></i>
        </button>
        <button
          className='btn-edit task-btn'
          onClick={() => {
            return findItem(task.id);
          }}
        >
          <i className='fas fa-pen'></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
