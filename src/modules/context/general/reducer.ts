import { GeneralModel } from '../../models';
import { ActionType } from './actions';
import { IState } from './state';

export const reducer = (state: IState, action: GeneralModel.IAction<ActionType>) => {
  switch (action.type) {
    case ActionType.ADD_TOAST:
      return { ...state, toastList: [...state.toastList, action.payload] };
    case ActionType.REMOVE_TOAST:
      return { ...state, toastList: state.toastList.filter((toast) => action.payload.id !== toast.id) };
    default:
      return state;
  }
};

