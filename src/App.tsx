import React from 'react';
import TaskListContextProvider from './context/TaskListContex';

function App() {
  return (
    <div className='App'>
      <TaskListContextProvider>hello</TaskListContextProvider>
    </div>
  );
}

export default App;
