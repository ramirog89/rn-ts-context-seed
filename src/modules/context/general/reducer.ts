import { ActionType } from './actions';
import { IState } from './state';

export const reducer = (state: IState, { type, payload }: { type: ActionType, payload: any } ) => {
  switch (type) {
    case ActionType.ADD_TOAST:
      return { ...state, toastList: [...state.toastList, payload] };
    case ActionType.REMOVE_TOAST:
      return { ...state, toastList: state.toastList.filter((toast) => payload.id !== toast.id) };
    default:
      return state;
  }
};

