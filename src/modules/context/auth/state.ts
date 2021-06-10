import { UserModel } from "../../models";

export interface IState {
  isAuth: boolean;
  user: UserModel.IUser | null;
  sessionChecked: boolean;
};

export const initialState: IState = {
  isAuth: false,
  user: null,
  sessionChecked: false
}
