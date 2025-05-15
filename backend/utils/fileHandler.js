const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../data/tasks.json");

function readTasks() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeTasks(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { readTasks, writeTasks };
