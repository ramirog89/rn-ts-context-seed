import RNSecureKeyStore, { ACCESSIBLE } from 'react-native-secure-key-store';
import { safeParse } from '../../utils/safeParse';

interface IStorageServiceProps {
  storage: typeof RNSecureKeyStore;
}

export class StorageService {
  private service;

  constructor({ storage }: IStorageServiceProps) {
    this.service = storage;
  }

  public get = async <T>(key: string): Promise<T | undefined> => {
    try {
      const value = await this.service.get(key);
      return safeParse(value) as T;
    } catch (e) {
      throw new Error(`Error at get key: ${key}. detail: ${e}`);
    }
  }

  public set = async <T>(key: string, value: T): Promise<void> => {
    await this.service.set(key, JSON.stringify(value), { accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY });
  };

  public remove = async (key: string): Promise<void> => {
    await this.service.remove(key);
  };
};
