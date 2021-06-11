import { GeneralModel, UserModel } from "../modules/models";

export const getUser1 = (): UserModel.IUser => ({
  username: 'test',
  id: 1
});

export const getToast1 = (): GeneralModel.IToast => ({
  message: 'tosat',
  type: GeneralModel.ToastType.SUCCESS
});
