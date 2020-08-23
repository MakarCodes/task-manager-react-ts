interface ITask {
  title: string;
  id: string;
}

type State = Array<ITask>;

type Actions =
  | { type: 'ADD_TASK'; payload: { title: string } }
  | { type: 'REMOVE_TASK'; payload: { id: string } }
  | { type: 'CLEAR_TASK_LIST' }
  | { type: 'EDIT_LIST'; payload: Task };
