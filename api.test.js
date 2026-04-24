/**
 * Jest Tests for Hello World API
 * 
 * Test Coverage:
 * - GET /api/hello returns 200 OK
 * - Response is valid JSON with "message" field
 * - Content-Type header is application/json
 * - Error states handled gracefully
 */

const request = require('supertest');
const app = require('./server');

describe('GET /api/hello', () => {
  
  /**
   * Q1: Test status code is 200 OK
   * Test ID: API-001
   */
  test('should return 200 OK status code', async () => {
    const response = await request(app)
      .get('/api/hello');
    
    expect(response.status).toBe(200);
  });

  /**
   * Q1: Test response body contains correct message
   * Test ID: API-002
   */
  test('should return JSON with "message" field containing "Hello World"', async () => {
    const response = await request(app)
      .get('/api/hello');
    
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Hello World');
  });

  /**
   * Q1: Test Content-Type header is application/json
   * Test ID: API-003
   */
  test('should return Content-Type: application/json header', async () => {
    const response = await request(app)
      .get('/api/hello');
    
    expect(response.headers['content-type']).toMatch(/application\/json/);
  });

  /**
   * Q1: Test response structure
   * Test ID: API-004
   */
  test('should return only the message field (no extra properties)', async () => {
    const response = await request(app)
      .get('/api/hello');
    
    expect(Object.keys(response.body).length).toBe(1);
    expect(response.body).toEqual({ message: 'Hello World' });
  });

  /**
   * Q3: Test that non-GET methods are not allowed
   * Test ID: API-005
   */
  test('should return 404 for POST request (endpoint not defined for POST)', async () => {
    const response = await request(app)
      .post('/api/hello');
    
    expect(response.status).toBe(404);
  });

  /**
   * Q3: Test error handling - invalid endpoint
   * Test ID: API-006
   */
  test('should return 404 for non-existent endpoint', async () => {
    const response = await request(app)
      .get('/api/nonexistent');
    
    expect(response.status).toBe(404);
  });

  /**
   * Q3: Test response time (performance)
   * Test ID: API-007
   */
  test('should respond within 100ms', async () => {
    const startTime = Date.now();
    
    const response = await request(app)
      .get('/api/hello');
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    expect(duration).toBeLessThan(100);
    expect(response.status).toBe(200);
  });

  /**
   * Q3: Test multiple concurrent requests
   * Test ID: API-008
   */
  test('should handle multiple concurrent requests', async () => {
    const requests = Array(5).fill(null).map(() => 
      request(app).get('/api/hello')
    );
    
    const responses = await Promise.all(requests);
    
    responses.forEach(response => {
      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Hello World');
    });
  });
});

describe('Frontend Integration', () => {
  
  /**
   * Q3: Frontend fetch simulation
   * Test ID: FE-001
   */
  test('simulates frontend fetch - valid JSON response', async () => {
    const response = await request(app)
      .get('/api/hello');
    
    // Simulate what frontend app.js does
    const data = response.body;
    
    // Verify the data can be used by frontend
    expect(typeof data.message).toBe('string');
    expect(data.message.length).toBeGreaterThan(0);
  });

  /**
   * Q3: Error state simulation
   * Test ID: FE-002
   */
  test('simulates error handling - graceful degradation', async () => {
    // Test that the app handles errors gracefully
    const response = await request(app)
      .get('/api/nonexistent');
    
    // Frontend should handle this 404 gracefully
    expect(response.status).toBe(404);
  });
});
