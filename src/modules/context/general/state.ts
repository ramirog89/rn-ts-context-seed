import { GeneralModel } from '../../models';

export interface IState {
  loading: GeneralModel.IEntityMap<GeneralModel.ILoading>;
  toastList: { id: string, toast: GeneralModel.IToast }[];
};

export const initialState: IState = {
  loading: {},
  toastList: []
}
