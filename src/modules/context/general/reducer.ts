import { ActionType } from './actions';
import { IState } from './state';
import { GeneralModel } from '../../models';

export const reducer = (state: IState, action: GeneralModel.IAction<ActionType>) => {
  switch (action.type) {
    case ActionType.ADD_TOAST:
      return { ...state, toastList: [...state.toastList, action.payload.todo] };
    case ActionType.REMOVE_TOAST:
      return { ...state, toastList: state.toastList.filter((todo, index) => action.payload.id === index) };
    case ActionType.SET_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload.key]: { isLoading: action.payload.isLoading, hasError: action.payload.hasError, error: action.payload.error }
        }
      };
    default:
      return state;
  }
};

