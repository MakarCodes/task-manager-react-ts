import React, { useContext } from 'react';
import { TaskListContext } from '../../context/TaskListContex';
import { ActionTypes } from '../../reducers/actionTypes';
import { ListItem, TaskTitle, DeleteButton, EditButton } from './Task.styles';

interface ITaskProps {
  task: ITask;
}

const Task: React.FC<ITaskProps> = ({ task }) => {
  const { dispatch, findItem } = useContext(TaskListContext);
  const a = true;
  return (
    <ListItem>
      <TaskTitle>{task.title}</TaskTitle>
      <div>
        <DeleteButton
          onClick={() => {
            return dispatch({
              type: ActionTypes.REMOVE_TASK,
              payload: {
                id: task.id,
              },
            });
          }}
        >
          <i className='fas fa-trash-alt'></i>
        </DeleteButton>
        <EditButton
          onClick={() => {
            return findItem(task.id);
          }}
        >
          <i className='fas fa-pen'></i>
        </EditButton>
      </div>
    </ListItem>
  );
};

export default Task;
