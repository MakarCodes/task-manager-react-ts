import React, { createContext, useState } from 'react';
import { uuid } from 'uuidv4';

type ITask = {
  title: string;
  id: string;
};
interface TaskListContextType {
  tasks: Array<ITask>;
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  clearTaskList: () => void;
  findItem: (id: string) => void;
  editTask: (title: string, id: string) => void;
  editItem: ITask | undefined;
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

  const [editItem, setEditItem] = useState<ITask | undefined>(undefined);

  const addTask = (title: string) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };
  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  const clearTaskList = () => setTasks([]);

  const findItem = (id: string) => {
    const item = tasks.find(task => task.id === id);
    setEditItem(item);
  };
  const editTask = (title: string, id: string) => {
    const newTasks: Array<ITask> = tasks.map(task => {
      return task.id === id ? { title, id } : task;
    });
    setTasks(newTasks);
  };
  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearTaskList,
        findItem,
        editTask,
        editItem,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
