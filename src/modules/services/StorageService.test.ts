import { ENV } from '../../constants';
import { StorageService } from './StorageService';

describe('StorageService', () => {
  let storageService: StorageService;
  let mockStorage = {
    get: jest.fn().mockReturnValue(Promise.resolve('value')),
    set: jest.fn().mockReturnValue(Promise.resolve()),
    remove: jest.fn().mockReturnValue(Promise.resolve()),
  };

  beforeEach(() => {
    storageService = new StorageService({ storage: mockStorage as any });
  });

  it('should get key', async () => {
    const value = await storageService.get('key');
    expect(mockStorage.get).toHaveBeenCalledWith('key');
    expect(value).toEqual('value');
  });

  it('should return undefined when get throws error', async () => {
    mockStorage.get = jest.fn().mockRejectedValue('error');
    const value = await storageService.get('key');
    expect(value).toEqual(undefined);
  });

  it('should set key', async () => {
    await storageService.set('key', 'value');
    expect(mockStorage.set).toHaveBeenCalledWith('key', JSON.stringify('value'), {"accessible": "AccessibleAlwaysThisDeviceOnly"});
  });

  it('should remove key', async () => {
    await storageService.remove('key');
    expect(mockStorage.remove).toHaveBeenCalledWith('key');
  });
});
