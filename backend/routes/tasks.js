const { readTasks, writeTasks } = require("../utils/fileHandler");
const { v4: uuidv4 } = require("crypto");

function getTasks(res) {
  const tasks = readTasks();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(tasks));
}

function addTask(req, res) {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    const task = JSON.parse(body);
    if (!task.title) {
      res.writeHead(400);
      return res.end(JSON.stringify({ error: "Title is required" }));
    }

    const tasks = readTasks();
    const newTask = { id: uuidv4(), title: task.title, completed: false };
    tasks.push(newTask);
    writeTasks(tasks);
    res.writeHead(201);
    res.end(JSON.stringify(newTask));
  });
}

function updateTask(req, res, id) {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    const update = JSON.parse(body);
    const tasks = readTasks();
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) {
      res.writeHead(404);
      return res.end(JSON.stringify({ error: "Not found" }));
    }

    tasks[index] = { ...tasks[index], ...update };
    writeTasks(tasks);
    res.writeHead(200);
    res.end(JSON.stringify(tasks[index]));
  });
}

function deleteTask(res, id) {
  const tasks = readTasks();
  const updated = tasks.filter((t) => t.id !== id);
  if (tasks.length === updated.length) {
    res.writeHead(404);
    return res.end(JSON.stringify({ error: "Not found" }));
  }

  writeTasks(updated);
  res.writeHead(200);
  res.end(JSON.stringify({ success: true }));
}

module.exports = { getTasks, addTask, updateTask, deleteTask };
