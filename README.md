# Simple Chat Application

This is a simple chat application built using Node.js, TypeScript, React, and Socket.io following the principles of Clean Architecture.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)


## Installation

### Backend

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <repository-folder>/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the server:
    ```bash
    npx tsc
    node dist/server.js
    ```

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd <repository-folder>/frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    npm start
    ```

## Usage

1. Start the backend server:
    ```bash
    cd <repository-folder>/backend
    npx tsc
    node dist/server.js
    ```

2. Start the frontend development server:
    ```bash
    cd <repository-folder>/frontend
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`.

4. You should now be able to send and receive messages in real-time.


## Technologies Used

Backend:

- Node.js
- TypeScript
- Express
- Socket.io

Frontend:

- React
- TypeScript
- Axios
- Socket.io-client
- Tailwind CSS


## License

This project is licensed under the MIT License. See the LICENSE file for details.


### Notes

- Replace `<repository-url>` with the actual URL of your repository.
- Make sure the directory structure matches your project setup.
- Include any additional setup instructions if necessary.
- If you have any environment variables or configuration files, include instructions on how to set them up.
