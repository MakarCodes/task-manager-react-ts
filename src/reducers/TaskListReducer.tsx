import { v4 as uuidv4 } from 'uuid';
import { ActionTypes } from './actionTypes';

export const TaskListReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK:
      return [...state, { title: action.payload.title, id: uuidv4() }];
    case ActionTypes.REMOVE_TASK:
      return state.filter((task: ITask) => task.id !== action.payload.id);
    case ActionTypes.CLEAR_TASK_LIST:
      return [];
    case ActionTypes.EDIT_LIST:
      const newTasks: State = state.map((task: ITask) => {
        return task.id === action.payload.id
          ? { title: action.payload.title, id: action.payload.id }
          : task;
      });
      return newTasks;
    default:
      return state;
  }
};
