import { ENV } from '../../constants';
import { ApiService } from './ApiService';

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService();
    (apiService as any).http = jest.fn().mockReturnValue(Promise.resolve({}));
  });

  it('signIn', () => {
    apiService.signIn({ username: 'test', password: 'test' });
    expect((apiService as any).http).toHaveBeenCalledWith({
      baseURL: ENV.API.URL,
      headers: expect.any(Object),
      data: JSON.stringify({ username: 'test', password: 'test' }),
      method: 'POST',
      url: 'auth/login'
    });
  });
});
