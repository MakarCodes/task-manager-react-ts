import React from 'react';
import TaskListContextProvider from './context/TaskListContex';
import TaskList from './components/TaskList/TaskList';
import TaskForm from './components/TaskForm/TaskForm';
import Header from './components/Header/Header';
import { AppContainer, AppWrapper, Main } from './App.styles';

const App: React.FC = () => {
  return (
    <TaskListContextProvider>
      <AppContainer>
        <AppWrapper>
          <Header />
          <Main>
            <TaskForm />
            <TaskList />
          </Main>
        </AppWrapper>
      </AppContainer>
    </TaskListContextProvider>
  );
};

export default App;
