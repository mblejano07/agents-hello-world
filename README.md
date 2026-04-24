# Hello World Proof-of-Concept v2

## Project Overview
Hello World PoC v2 is an evolved demonstration of a Node.js application within the OpenClaw environment. This version focuses on providing a more robust structure, including comprehensive API documentation and verified setup procedures, serving as a gold standard for future internal project bootstrapping.

## Prerequisites
- **Node.js:** v20.x or higher (LTS recommended)
- **npm:** v10.x or higher

## Setup Instructions
To get the project running from scratch, follow these steps:

1. Navigate to the project directory:
   ```bash
   cd /Users/mblejano/.openclaw/workspace/hello-world
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Run Instructions
To start the application in development mode:

```bash
npm start
```
The server will be available at `http://localhost:3000`.

## Test Instructions
To verify the application's health and functionality:

```bash
npm test
```

## API Documentation

### Get Hello Message
Retrieves the standard greeting from the API.

- **Endpoint:** `GET /api/hello`
- **Description:** Returns a JSON response containing a greeting message.
- **Authentication:** None required.

#### Request Example
```http
GET /api/hello HTTP/1.1
Host: localhost:3000
Accept: application/json
```

#### Response Example
- **Status:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Hello World!",
    "version": "2.0.0",
    "timestamp": "2026-04-24T16:20:00Z"
  }
  ```

## Troubleshooting
- **Port Conflict:** If the application fails to start due to `EADDRINUSE`, ensure no other process is using port 3000. Use `lsof -i :3000` to find and kill the process.
- **Dependency Issues:** If `npm install` fails, clear the cache and reinstall:
  ```bash
  rm -rf node_modules package-lock.json
  npm cache clean --force
  npm install
  ```
- **Node Version:** Verify your environment with `node -v`. Ensure it matches the prerequisites.
