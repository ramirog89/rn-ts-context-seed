export class ApiServiceMock {
  public signIn = jest.fn().mockReturnValue({ token: 'token-string' });
}
