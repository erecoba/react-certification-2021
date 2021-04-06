import to from 'await-to-js';
import LoginApi from '../login.api';

describe('Services - LoginAPI', () => {
  it('should return user login data', async () => {
    const response = await LoginApi('wizeline', 'Rocks!');

    expect(response.id).toBe('123');
    expect(response.name).toBe('Wizeline');
  });

  it('should return an error', async () => {
    const [err] = await to(LoginApi('eru', 'recoba'));
    expect(err).toBeTruthy();
  });
});
