import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContex';
import { actionTypes } from '../reducers/actionTypes';

const TaskForm: React.FC = () => {
  const { dispatch, editItem, setEditItem } = useContext(TaskListContext);
  const [title, setTitle] = useState<string>('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (editItem) {
      dispatch({
        type: actionTypes.EDIT_LIST,
        payload: {
          title,
          id: editItem.id,
        },
      });
      setEditItem(undefined);
    } else {
      dispatch({
        type: actionTypes.ADD_TASK,
        payload: {
          title,
        },
      });
      setTitle('');
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='task-input'
        placeholder='Add task...'
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>
          {editItem ? 'Edit task' : 'Add task'}
        </button>
        <button
          className='btn clear-btn'
          onClick={() => {
            return dispatch({ type: actionTypes.CLEAR_TASK_LIST });
          }}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
