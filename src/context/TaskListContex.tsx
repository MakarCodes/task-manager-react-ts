import React, { createContext, useState, useEffect, useReducer } from 'react';
import { TaskListReducer } from '../reducers/TaskListReducer';

interface TaskListContextType {
  tasks: State;
  dispatch: (value: Actions) => void;
  findItem: (id: string) => void;
  setEditItem: (item: ITask | undefined) => void;
  editItem: ITask | undefined;
}
type Props = {
  children: JSX.Element;
};

export const TaskListContext = createContext<TaskListContextType>(undefined!);

const TaskListContextProvider: React.FC<Props> = ({ children }) => {
  const initialData: State = JSON.parse(localStorage.getItem('tasks') || '[]');
  const [tasks, dispatch] = useReducer(TaskListReducer, initialData);
  const [editItem, setEditItem] = useState<ITask>();

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const findItem = (id: string): void => {
    const item: ITask | undefined = tasks.find((task: ITask) => task.id === id);
    if (item === undefined) {
      throw new Error('No task results for this _id!');
    }
    setEditItem(item);
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
