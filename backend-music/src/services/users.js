// const connection = require('../helpers/connections')();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class User {
  async getAll() {
    return await prisma.user.findMany({
      include: {
        libraries: true,
        playlists: true,
      },
    });
  }

  async getByEmail(email) {
    return await prisma.user.findFirst({
      where: {
        email,
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
