# Todo Application

A full-stack Todo application built with React and Node.js. The application features a modern, responsive UI for managing tasks with a RESTful backend API for data persistence.
# Deploy link
- frontend:https://to-do-list-theta-amber.vercel.app/
- backend:https://to-do-list-rxrh.onrender.com
# Folder structure
![image](https://github.com/user-attachments/assets/8adcd3c5-72b6-47ae-a7b5-ce820c05a076)
![image](https://github.com/user-attachments/assets/7bdd1dd7-44e8-438e-9e51-d30e2412e0fb)



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

- # UI
- ![image](https://github.com/user-attachments/assets/31f54d95-23f7-4d8c-9138-a33ce1e12f05)
- ![image](https://github.com/user-attachments/assets/6ca217a6-abfb-4d7b-8aa0-742786872195)



.
