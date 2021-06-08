import axios from 'axios';

import { ENV } from '../../constants';

export class ApiService {
  private http = axios;

  public signIn(username: string, password: string) {
    console.log(username, password, ENV.API.URL);
    return this.request('auth/login', { method: 'POST', data: { username, password } });
  }

  private request(path: string, { method, data }: { method: any, data: any}) {
    return this.http({
      url: path,
      baseURL: ENV.API.URL,
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(data)
    });
  }
}
