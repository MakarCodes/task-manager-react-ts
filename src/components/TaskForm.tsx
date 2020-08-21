import React, { useContext, useState } from 'react';
import { TaskListContext } from '../context/TaskListContex';

export interface TaskFormProps {}

const TaskForm: React.FC<TaskFormProps> = () => {
  const { addTask, clearTaskList } = useContext(TaskListContext);
  const [title, setTitle] = useState<string>('');
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    addTask(title);
    setTitle('');
  };
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
          Add task
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
