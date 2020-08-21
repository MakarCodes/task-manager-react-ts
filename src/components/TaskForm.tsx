import React from 'react';

export interface TaskFormProps {}

const TaskForm: React.SFC<TaskFormProps> = () => {
  return (
    <form className='form'>
      <input
        type='text'
        className='task-input'
        placeholder='Add task...'
        required
      />
      <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>
          Add task
        </button>
        <button className='btn clear-btn'>Clear</button>
      </div>
    </form>
  );
};

export default TaskForm;
