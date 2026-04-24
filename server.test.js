/**
 * Jest Tests for Hello World Server
 * Uses supertest for API testing without requiring a running server
 */

const request = require('supertest');
const app = require('./server');

describe('Hello World API', () => {
  
  /**
   * Test: GET /api/hello returns Hello World message
   * Test ID: SRV-001
   */
  it('should return Hello World message', async () => {
    const response = await request(app)
      .get('/api/hello');
    
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
    expect(response.body).toEqual({ message: 'Hello World' });
  });

  /**
   * Test: Unknown routes return 404
   * Test ID: SRV-002
   */
  it('should return 404 for unknown routes', async () => {
    const response = await request(app)
      .get('/unknown');
    
    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty('error', 'Not Found');
  });

  /**
   * Test: Content-Type header is set correctly
   * Test ID: SRV-003
   */
  it('should set Content-Type header', async () => {
    const response = await request(app)
      .get('/api/hello');
    
    expect(response.headers['content-type']).toMatch(/application\/json/);
  });
});
