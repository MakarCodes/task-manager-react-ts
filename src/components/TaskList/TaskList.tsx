import React, { useContext } from 'react';
import { TaskListContext } from '../../context/TaskListContex';
import Task from '../Task/Task';
import { List, Message } from './TaskList.styles';

const TaskList: React.FC = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <React.Fragment>
      {tasks.length ? (
        <List>
          {tasks.map(task => {
            return <Task task={task} key={task.id} />;
          })}
        </List>
      ) : (
        <Message>No tasks to do...</Message>
      )}
    </React.Fragment>
  );
};

export default TaskList;
