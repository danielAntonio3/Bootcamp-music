const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Playlist {
  async getAll() {
    return await prisma.playlist.findMany({
      include: {
        user: true,
      },
    });
  }

  async getOne(id) {
    return await prisma.playlist.findUnique({
      where: {
        id: Number.parseInt(id),
      },
      include: {
        user: true,
      },
    });
  }

  async create(data) {
    return await prisma.playlist.create({
      data: {
        ...data,
      },
    });
  }

  async update(id, data) {
    return await prisma.playlist.update({
      where: {
        id: Number.parseInt(id),
      },
      data: {
        ...data,
      },
    });
  }

  async delete(id) {
    return await prisma.playlist.delete({
      where: {
        id: Number.parseInt(id),
      },
    });
  }
}

module.exports = Playlist;
