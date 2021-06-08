
import { ENV } from '../../constants';

export class ApiService {
  public signIn(username: string, password: string) {
    console.log(username, password, ENV.API.URL);
    return this.request('auth/login', { method: 'POST', data: { username, password } });
  }

  private request(path: string, { method, data }: { method: string, data: any}) {
    console.log(path);
    return fetch(`${ENV.API.URL}/${path}`, {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => response.json())
    .then((responseData) => {
        console.log("responseData : " +responseData);
    }).catch((error) => {
        console.log("error : " +error);
    });;
  }
}
