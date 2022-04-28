const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Song {
  async getAll() {
    return await prisma.song.findMany({
      include: {
        author: true,
      },
    });
  }

  async getOne(id) {
    return await prisma.song.findUnique({
      where: {
        id: Number.parseInt(id),
      },
      include: {
        author: true,
      },
    });
  }

  async create(data) {
    return await prisma.song.create({
      data: {
        ...data,
      },
    });
  }

  async update(id, data) {
    return await prisma.song.update({
      where: {
        id: Number.parseInt(id),
      },
      data: {
        ...data,
      },
    });
  }

  async delete(id) {
    return await prisma.song.delete({
      where: {
        id: Number.parseInt(id),
      },
    });
  }
}

module.exports = Song;
