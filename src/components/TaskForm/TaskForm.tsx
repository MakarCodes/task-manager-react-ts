import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../../context/TaskListContex';
import { ActionTypes } from '../../reducers/actionTypes';
import {
  Form,
  TaskInput,
  ButtonsContainer,
  AddButton,
  ClearButton,
} from './TaskForm.styles';

const TaskForm: React.FC = () => {
  const { dispatch, editItem, setEditItem } = useContext(TaskListContext);
  const [title, setTitle] = useState<string>('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (editItem) {
      dispatch({
        type: ActionTypes.EDIT_LIST,
        payload: {
          title,
          id: editItem.id,
        },
      });
      setEditItem(undefined);
    } else {
      dispatch({
        type: ActionTypes.ADD_TASK,
        payload: {
          title,
        },
      });
      setTitle('');
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  let edit = editItem ? true : false;
  return (
    <Form onSubmit={handleSubmit}>
      <TaskInput
        type='text'
        placeholder='Add task...'
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <ButtonsContainer>
        <AddButton edit={edit} type='submit'>
          {editItem ? 'Edit task' : 'Add task'}
        </AddButton>
        <ClearButton
          onClick={() => {
            return dispatch({ type: ActionTypes.CLEAR_TASK_LIST });
          }}
        >
          Clear
        </ClearButton>
      </ButtonsContainer>
    </Form>
  );
};

export default TaskForm;
