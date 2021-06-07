import { TodoModel } from '../../models';

export interface IState {
  todoList: TodoModel.ITodo[];
};

export const initialState: IState = {
  todoList: []
}
