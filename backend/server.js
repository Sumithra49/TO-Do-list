const http = require("http");
const url = require("url");
const { getTasks, addTask, updateTask, deleteTask } = require("./routes/tasks");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  if (path === "/tasks" && method === "GET") return getTasks(res);
  if (path === "/tasks" && method === "POST") return addTask(req, res);

  const idMatch = path.match(/^\/tasks\/(.+)$/);
  if (idMatch) {
    const id = idMatch[1];
    if (method === "PUT") return updateTask(req, res, id);
    if (method === "DELETE") return deleteTask(res, id);
  }

  res.writeHead(404);
  res.end(JSON.stringify({ error: "Route not found" }));
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
