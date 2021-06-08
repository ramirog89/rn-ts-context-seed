
import { ENV } from '../../constants';

export class ApiService {
  private http = (params: any) => {};

  public signIn(username: string, password: string) {
    return this.request('todo', { method: 'POST', data: { username, password } });
  }

  private request(url: string, { method, data }: { method: any, data: any}) {
    return this.http({
      baseURL: ENV.API.URL,
      url,
      method,
      data
    });
  }
}
