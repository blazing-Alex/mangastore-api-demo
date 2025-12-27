# Custom REST API Implementation

## What I Learned
I built this small project to understand the core concepts of RESTful architecture by separating the Backend (API) from the Frontend (Client). 

## How it Works
This project runs two separate servers to simulate a real-world microservices environment. 

1. **The API (Port 4000):**
   * Acts as the single source of data. Contains an in-memory data (array) to handle the requests coming from the server.
   * Serves raw JSON data.
   * Implements RESTful endpoints (`GET /books`, `POST /books`).

2. **The Client (Port 3000):**
   * Communicates with the API using `axios`
   * Renders the UI using EJS

## How to Run Locally
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the API: `node index.js` (Runs on Port 4000).
4. Start the Client: `node server.js` (Run on Port 3000).
5. Visit `localhost:3000`.
