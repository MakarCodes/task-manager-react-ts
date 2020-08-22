import React, { createContext, useState, useEffect, useReducer } from 'react';
import { uuid } from 'uuidv4';
import { TaskListReducer } from '../reducers/TaskListReducer';

type ITask = {
  title: string;
  id: string;
};
interface TaskListContextType {
  tasks: Array<ITask>;
  // addTask: (title: string) => void;
  // removeTask: (id: string) => void;
  dispatch: any;
  // clearTaskList: () => void;
  findItem: (id: string) => void;
  editTask: (title: string, id: string) => void;
  editItem: ITask | undefined;
}

export const TaskListContext = createContext<TaskListContextType>(undefined!);

const TaskListContextProvider: React.FC = ({ children }) => {
  const initialData: Array<ITask> = JSON.parse(
    localStorage.getItem('tasks') || '[]'
  );

  // const [tasks, setTasks] = useState<Array<ITask>>(initialData);
  const [tasks, dispatch] = useReducer(TaskListReducer, []);

  const [editItem, setEditItem] = useState<ITask | undefined>(undefined);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // const addTask = (title: string) => {
  //   setTasks([...tasks, { title, id: uuid() }]);
  // };
  // const removeTask = (id: string) => {
  //   setTasks(tasks.filter((task: ITask) => task.id !== id));
  // };
  // const clearTaskList = () => setTasks([]);

  const findItem = (id: string) => {
    const item = tasks.find((task: ITask) => task.id === id);
    setEditItem(item);
  };
  const editTask = (title: string, id: string) => {
    const newTasks: Array<ITask> = tasks.map((task: ITask) => {
      return task.id === id ? { title, id } : task;
    });
    // setTasks(newTasks);
    setEditItem(undefined);
  };
  return (
    <TaskListContext.Provider
      value={{
        tasks,
        dispatch,
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
