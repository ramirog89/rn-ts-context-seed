import { ApiService } from './ApiService';


describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = new ApiService();
    (apiService as any).http = jest.fn().mockReturnValue({});
  });

  it('getTodo', () => {
    apiService.getTodo();
    expect((apiService as any).http).toHaveBeenCalledWith({
      baseUrl: undefined,
      data: {},
      method: 'GET',
      url: 'todo'
    });
  });
});
