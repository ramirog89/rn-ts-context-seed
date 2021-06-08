export type IAction<T> = { type: T | null, payload?: any }

export type Nullable<T> = { [P in keyof T]: T[P] | null };

export type IEntityMap<T> = { [key:string]: T };

export type ILoading = { isLoading: boolean; error?: any; hasError?: boolean; };

export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning'
}

export interface IToast {
  message: string;
  type: ToastType;
};
