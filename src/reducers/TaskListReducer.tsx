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

// whypayloadType doesnt require title and id?!

export const TaskListReducer = (state: Array<payloadType>, action: IAction) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      console.log('add working');
      console.log(action.payload);
      return [...state, { title: action.payload.title, id: uuidv4() }];
    case actionTypes.REMOVE_TASK:
      console.log(action.payload);
      return state.filter((task: payloadType) => task.id !== action.payload.id);
    case actionTypes.CLEAR_TASK_LIST:
      return [];
    case actionTypes.FIND_ITEM:

    default:
      return state;
  }
};
