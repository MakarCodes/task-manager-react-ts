import { v4 as uuidv4 } from 'uuid';
import * as actionTypes from './actionTypes';

type payloadType = {
  title: string;
  id: string;
};

interface IAction {
  type: string;
  payload: payloadType;
}

export const TaskListReducer = (state: Array<payloadType>, action: IAction) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return [...state, { title: action.payload.title, id: uuidv4() }];
    case actionTypes.REMOVE_TASK:
      return state.filter((task: payloadType) => task.id !== action.payload.id);
    case actionTypes.CLEAR_TASK_LIST:
      return [];
    case actionTypes.EDIT_LIST:
      const newTasks: Array<payloadType> = state.map((task: payloadType) => {
        return task.id === action.payload.id
          ? { title: action.payload.title, id: action.payload.id }
          : task;
      });
      return newTasks;
    default:
      return state;
  }
};
