const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Library {
  async getAll() {
    return await prisma.libraries.findMany({
      include: {
        user: true,
      },
    });
  }

  async getOne(id) {
    return await prisma.Libraries.findUnique({
      where: {
        id: Number.parseInt(id),
      },
      include: {
        user: true,
      },
    });
  }

  async create(data) {
    return await prisma.Libraries.create({
      data: {
        ...data,
      },
    });
  }

  async update(id, data) {
    return await prisma.Libraries.update({
      where: {
        id: Number.parseInt(id),
      },
      data: {
        ...data,
      },
    });
  }

  async delete(id) {
    return await prisma.Libraries.delete({
      where: {
        id: Number.parseInt(id),
      },
    });
  }
}

module.exports = Library;
