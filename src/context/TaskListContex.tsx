import React, { createContext, useState, useEffect, useReducer } from 'react';
import { TaskListReducer } from '../reducers/TaskListReducer';

type ITask = {
  title: string;
  id: string;
};

interface TaskListContextType {
  tasks: Array<ITask>;
  dispatch: any;
  findItem: (id: string) => void;
  setEditItem: (value: ITask | undefined) => void;
  editItem: ITask | undefined;
}

export const TaskListContext = createContext<TaskListContextType>(undefined!);

const TaskListContextProvider: React.FC = ({ children }) => {
  const initialData: Array<ITask> = JSON.parse(
    localStorage.getItem('tasks') || '[]'
  );
  const [tasks, dispatch] = useReducer(TaskListReducer, initialData);
  const [editItem, setEditItem] = useState<ITask | undefined>(undefined);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const findItem = (id: string) => {
    const item: ITask | undefined = tasks.find((task: ITask) => task.id === id);
    if (item !== undefined) {
      setEditItem(item);
    }
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        dispatch,
        findItem,
        setEditItem,
        editItem,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
