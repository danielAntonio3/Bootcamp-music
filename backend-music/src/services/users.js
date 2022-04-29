const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class User {
  async getAll() {
    return await prisma.song.findMany({
      include: {
        libraries: true,
        playlists: true,
      },
    });
  }

  async getOne(id) {
    return await prisma.user.findUnique({
      where: {
        id: Number.parseInt(id),
      },
      include: {
        libraries: true,
        playlists: true,
      },
    });
  }

  async create(data) {
    return await prisma.user.create({
      data: {
        ...data,
      },
    });
  }

  async update(id, data) {
    return await prisma.user.update({
      where: {
        id: Number.parseInt(id),
      },
      data: {
        ...data,
      },
    });
  }

  async delete(id) {
    return await prisma.user.delete({
      where: {
        id: Number.parseInt(id),
      },
    });
  }
}

module.exports = User;
