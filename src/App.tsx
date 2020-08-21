import React from 'react';
import TaskListContextProvider from './context/TaskListContex';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className='App'>
      <TaskListContextProvider>
        <div className='container'>
          <div className='app-wrapper'>
            <div className='main'>
              <TaskForm />
              <TaskList />
            </div>
          </div>
        </div>
      </TaskListContextProvider>
    </div>
  );
}

export default App;
