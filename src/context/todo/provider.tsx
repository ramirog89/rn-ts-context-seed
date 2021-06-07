import { useMemo, createContext, useReducer, useContext } from 'react';

import { GeneralModel, TodoModel } from '../../models';
import { IProviderProps } from '../rootState';
import { IState, initialState } from './state';
import { ActionType } from './actions';
import { reducer } from './reducer';
import { useGeneral } from '../general';

interface ITodoContext {
  state: IState;
  addTodo: (todo: TodoModel.ITodo) => void;
  removeTodo: (index: number) => void;
  fetchTodoList: () => void;
}

export const TodoContext = createContext<ITodoContext | null>(null);

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('TodoContext is not wrapped with TodoContext.Provider');
  }
  return context;
};

export const TodoProvider = (props: IProviderProps) => {
  const { deps } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { addToast, setLoading } = useGeneral();

  const fetchTodoList = async () => {
    setLoading('fetchTodoList', true);
    try {
      setTimeout(async () => {
        const list = await deps.apiService.getTodo();
        dispatch({ type: ActionType.ADD_TODO_LIST, payload: { list } });
        setLoading('fetchTodoList', false);

      }, 2000);
    } catch (e) {
      setLoading('fetchTodoList', false, true, e.message);
      addToast({ message: 'error', type: GeneralModel.ToastType.ERROR });
    }
  }

  const addTodo = (todo: TodoModel.ITodo) => {
    dispatch({ type: ActionType.ADD_TODO , payload: { todo } });
    addToast({ message: 'success', type: GeneralModel.ToastType.SUCCESS });
  };

  const removeTodo = (id: number) => {
    dispatch({ type: ActionType.REMOVE_TODO , payload: { id } });
  };

  const value = useMemo(() => ({ state, addTodo, removeTodo, fetchTodoList }), [state]); // eslint-disable-line

  return <TodoContext.Provider value={value} {...props} />
};

