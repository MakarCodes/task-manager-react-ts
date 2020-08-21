import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContex';

export interface TaskFormProps {}

const TaskForm: React.FC<TaskFormProps> = () => {
  const { addTask, clearTaskList, editItem, editTask } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState<string>('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (editItem !== undefined) {
      editTask(title, editItem.id);
    } else {
      addTask(title);
      setTitle('');
    }
  };

  useEffect(() => {
    if (editItem !== undefined) {
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
            return clearTaskList();
          }}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
