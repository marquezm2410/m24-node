const request = require('supertest');
const app = require('../src/app');

describe('DESCRIBE (Probando rutas)', () => {
  describe('DESCRIBE (Probando GET notas', () => {
    test('Existe ruta', async () => {
      const envio = await request(app).get('/notass').send();
      expect(envio.status).toBe(200);
    });

    test('Content is array', async () => {
      const envio = await request(app).get('/notas').send();
      expect(envio.body).toBeInstanceOf(Array);
    });
  });
});
