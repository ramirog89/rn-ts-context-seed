import axios from 'axios';

import { ENV } from '../../constants';
import { UserModel } from '../models';

export class ApiService {
  private http = axios;

  public signIn({ username, password }: UserModel.ILoginRequest): Promise<UserModel.ILoginResponse> {
    return this.request('auth/login', { method: 'POST', data: { username, password } });
  }

  private request(path: string, { method, data }: { method: any, data: any}): Promise<any> {
    return this.http({
      url: path,
      baseURL: ENV.API.URL,
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data)
    }).then((response) => {
      return response.data;
    });
  }
}
