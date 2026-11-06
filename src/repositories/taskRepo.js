import prisma from '../config/db.js';

export async function findAll(completed) {
  const conditions = {};
  if (completed !== undefined) {
    conditions.completed = completed;
  }
  return prisma.task.findMany({
    where: conditions,
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
