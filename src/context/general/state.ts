import { GeneralModel } from '../../models';

export interface IState {
  loading: GeneralModel.IEntityMap<GeneralModel.ILoading>;
  toastList: GeneralModel.IToast[];
};

export const initialState: IState = {
  loading: {},
  toastList: []
}
