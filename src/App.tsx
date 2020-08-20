import React from 'react';
import TaskListContextProvider from './context/TaskListContex';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='App'>
      <TaskListContextProvider>
        hello
        <TaskList />
      </TaskListContextProvider>
    </div>
  );
}

export default App;
