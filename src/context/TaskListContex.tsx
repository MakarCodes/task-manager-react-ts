import React, { createContext, useState } from 'react';
import { uuid } from 'uuidv4';

type ITask = {
  title: string;
  id: string;
};
interface TaskListContextType {
  tasks: Array<ITask>;
}

export const TaskListContext = createContext<TaskListContextType>(undefined!);

export interface TaskListContextProviderProps {}

const TaskListContextProvider: React.FC<TaskListContextProviderProps> = ({
  children,
}) => {
  const [tasks, setTasks] = useState([
    { title: 'Make some code', id: '1' },
    { title: 'Cook a dinner', id: '2' },
    { title: 'Do the shopping', id: '3' },
  ]);

  const addTask = (title: string) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };
  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  return (
    <TaskListContext.Provider value={{ tasks }}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
