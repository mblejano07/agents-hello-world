# Hello World Proof-of-Concept

## Project Overview
This project is a simple Proof-of-Concept (PoC) designed to demonstrate the basic setup and functionality of a Node.js application within the OpenClaw environment. It serves as a baseline for verifying environment configurations and deployment workflows.

## Prerequisites
- **Node.js:** v20.x or higher (LTS recommended)
- **npm:** v10.x or higher

## Setup Instructions
To install the necessary dependencies, run the following command in the project root:

```bash
npm install
```

## Run Instructions
To start the application in development mode, execute:

```bash
npm start
```
The server will typically be available at `http://localhost:3000`.

## Test Instructions
To run the test suite and verify the application's health, use:

```bash
npm test
```

## API Documentation

### Get Hello Message
Returns a simple greeting message.

- **Endpoint:** `GET /api/hello`
- **Response Body:**
  ```json
  {
    "message": "Hello World!"
  }
  ```
- **Success Code:** `200 OK`

## Troubleshooting
- **Port Conflict:** If the application fails to start because the port is already in use, check for other running Node processes or change the port in the environment variables.
- **Dependency Issues:** If `npm install` fails, try deleting the `node_modules` folder and `package-lock.json`, then run `npm install` again.
- **Node Version:** Ensure you are using the required Node.js version by running `node -v`.
