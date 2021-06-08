import { UserModel } from "../../models";

export interface IState {
  isAuth: boolean;
  user: UserModel.IUser | null;
};

export const initialState: IState = {
  isAuth: false,
  user: null,
}