import React, { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContex';
import { ActionTypes } from '../reducers/actionTypes';

interface ITaskProps {
  task: ITask;
}

const Task: React.FC<ITaskProps> = ({ task }) => {
  const { dispatch, findItem } = useContext(TaskListContext);
  return (
    <li className='list-item'>
      <span>{task.title}</span>
      <div>
        <button
          className='btn-delete task-btn'
          onClick={() => {
            return dispatch({
              type: ActionTypes.REMOVE_TASK,
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
