import { readTasks, writeTasks } from '../utils/fileHandler.js';

export async function handleTasks(req, res) {
  const id = req.url.split('/')[2];

  try {
    switch(req.method) {
      case 'GET':
        const tasks = await readTasks();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(tasks));
        break;

      case 'POST':
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
          const task = JSON.parse(body);
          const tasks = await readTasks();
          const newTask = {
            id: crypto.randomUUID(),
            title: task.title,
            completed: false
          };
          tasks.push(newTask);
          await writeTasks(tasks);
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(newTask));
        });
        break;

      case 'PUT':
        if (!id) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Task ID required' }));
          return;
        }
        body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
          const update = JSON.parse(body);
          const tasks = await readTasks();
          const taskIndex = tasks.findIndex(t => t.id === id);
          if (taskIndex === -1) {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Task not found' }));
            return;
          }
          tasks[taskIndex] = { ...tasks[taskIndex], ...update };
          await writeTasks(tasks);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(tasks[taskIndex]));
        });
        break;

      case 'DELETE':
        if (!id) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Task ID required' }));
          return;
        }
        const deleteTasks = await readTasks();
        const filteredTasks = deleteTasks.filter(t => t.id !== id);
        await writeTasks(filteredTasks);
        res.writeHead(204);
        res.end();
        break;

      default:
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}