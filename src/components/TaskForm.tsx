import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContex';

export interface TaskFormProps {}

const TaskForm: React.FC<TaskFormProps> = () => {
  const { dispatch, editItem, editTask } = useContext(TaskListContext);
  const [title, setTitle] = useState<string>('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (editItem) {
      editTask(title, editItem.id);
    } else {
      console.log('add working');
      dispatch({
        type: 'ADD_TASK',
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
            return dispatch({ type: 'CLEAR_TASK_LIST' });
          }}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
