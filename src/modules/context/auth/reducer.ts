import { ActionType } from './actions';
import { IState } from './state';
import { GeneralModel } from '../../models';

export const reducer = (state: IState, action: GeneralModel.IAction<ActionType>) => {
  switch (action.type) {
    case ActionType.AUTH_SIGN_IN_SUCCESS:
      return { isAuth: true };
    case ActionType.AUTH_SIGN_OUT:
      return { isAuth: false };
    default:
      return state;
  }
};

