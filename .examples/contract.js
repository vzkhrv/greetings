const axios = require('axios');

describe('Проверка контракта', () => {
    test('API возвращает список пользователей', async () => {
      const response = await axios.get('https://rest-api.com/users');
    
      expect(response.status).toBe(200);
      expect(response.data.length).toBeGreaterThan(0);
      expect(response.data[0]).toHaveProperty('name');
      expect(response.data[0]).toHaveProperty('email');
      expect(response.data[0]).toHaveProperty('address');
      expect(response.data[0].address).toHaveProperty('city');
    });
});