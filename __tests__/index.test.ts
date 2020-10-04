import { Hello } from '../src';

describe('Hello', () => {
  it('should get write return', async () => {
    expect(Hello()).toBe(true);
  });
});
