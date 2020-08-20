import React, { createContext, useState } from 'react';

// interface ITask {
//   task: string;
//   id: number;
// }
// type TaskListContextType = Array<ITask>;
type ITask = {
  task: string;
  id: number;
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
    { task: 'Make some code', id: 1 },
    { task: 'Cook a dinner', id: 2 },
    { task: 'Do the shopping', id: 3 },
  ]);
  return (
    <TaskListContext.Provider value={{ tasks }}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
