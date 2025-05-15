import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const TASKS_FILE = join(process.cwd(), 'data', 'tasks.json');

export async function readTasks() {
  try {
    const data = await readFile(TASKS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await writeFile(TASKS_FILE, '[]', 'utf8');
      return [];
    }
    throw error;
  }
}

export async function writeTasks(tasks) {
  await writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2), 'utf8');
}