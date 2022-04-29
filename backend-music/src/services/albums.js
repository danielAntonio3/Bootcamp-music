const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class Album {
  async getAll() {
    return await prisma.album.findMany({
      include: {
        songs: true,
      },
    });
  }

  async getOne(id) {
    return await prisma.album.findUnique({
      where: {
        id: Number.parseInt(id),
      },
      include: {
        songs: true,
      },
    });
  }

  async create(data) {
    return await prisma.album.create({
      data: {
        ...data,
      },
    });
  }

  async update(id, data) {
    return await prisma.album.update({
      where: {
        id: Number.parseInt(id),
      },
      data: {
        ...data,
      },
    });
  }

  async delete(id) {
    return await prisma.album.delete({
      where: {
        id: Number.parseInt(id),
      },
    });
  }
}
module.exports = Album;
