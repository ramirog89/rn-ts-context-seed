import { wait } from './wait';

describe('wait', () => {
  it('should wait a given time', async () => {
    const timeout = 1000;
    const then = Date.now();
    await wait(timeout);
    const diff = Date.now() - then;
    const errorMargin = 200; /** expected diff in reality should be somewhere between 1000 and 1050 depending on the machine running the test */
    expect(diff).toBeGreaterThanOrEqual(timeout);
    expect(diff).toBeLessThanOrEqual(timeout + errorMargin);
  });
});
