import instance from '../apiService';
import mockAdapter from 'axios-mock-adapter';
describe('apiService', () => {
  let mock;
  beforeAll(() => {
    mock = new mockAdapter(instance);
  });

  it('should be called with the correct baseURL', () => {
    expect(mock.axiosInstance.defaults.baseURL).toBe('localhost:3000');
  });
});
