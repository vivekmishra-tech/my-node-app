const request = require('supertest');
const app = require('../src/index');
const { describe } = require('yargs');

describe('GET /health', () => {
    it('should return status ok and current time', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('status', 'ok');
        expect(res.body).toHaveProperty('time');
        expect(new Date(res.body.time).toString()).not.toBe('Invalid Date');
    });
});