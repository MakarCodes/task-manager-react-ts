import React from 'react';
import TaskListContextProvider from './context/TaskListContex';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='App'>
      <TaskListContextProvider>
        <div className='container'>
          <div className='app-wrapper'>
            <div className='main'>
              <TaskList />
            </div>
          </div>
        </div>
      </TaskListContextProvider>
    </div>
  );
}

export default App;
