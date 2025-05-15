# Todo Application

A full-stack Todo application built with React and Node.js. The application features a modern, responsive UI for managing tasks with a RESTful backend API for data persistence.

## Features

- Add, delete, and toggle task completion
- Filter tasks by status (All/Active/Completed)
- Persistent storage using both localStorage (frontend) and JSON file (backend)
- Responsive design that works on desktop and mobile
- RESTful API backend

## Tech Stack

### Frontend

- React 18
- Vite
- CSS3 with responsive design

### Backend

- Node.js
- Native HTTP module
- File-based storage

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Running the Application

1. Start the backend server:

```bash
npm run start:backend
```

The server will start on http://localhost:3000

2. In a new terminal, start the frontend development server:

```bash
npm run dev
```

The frontend will be available at the URL shown in your terminal

## API Endpoints

- `GET /tasks` - Retrieve all tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

## Project Structure

```
├── data/
│   └── tasks.json         # Task storage
├── routes/
│   └── tasks.js          # API route handlers
├── src/
│   ├── components/       # React components
│   ├── styles/          # CSS styles
│   └── App.jsx          # Root component
├── utils/
│   └── fileHandler.js    # File operations
└── server.js            # Backend entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License.
