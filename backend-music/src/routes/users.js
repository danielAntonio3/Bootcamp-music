const { Router } = require('express');
const User = require('./../services/users');

function Users(app) {
  const ServicesUser = new User();
  const router = new Router();

  app.use('/api/users', router);

  // get all songs
  router.get('/', async (req, res) => {
    return res.status(200).json({
      songs: await ServicesUser.getAll(),
    });
  });

  // get id song
  router.get('/:id', async (req, res) => {
    return res.status(200).json({
      song: await ServicesUser.getOne(req.params.id),
    });
  });

  // create a song
  router.post('/', async (req, res) => {
    // console.log(req.body);
    return res.status(200).json({
      song: await ServicesUser.create(req.body),
    });
  });

  // update a song
  router.put('/:id', async (req, res) => {
    return res.status(200).json({
      song: await ServicesUser.update(req.params.id, req.body),
    });
  });

  // delete a song
  router.delete('/:id', async (req, res) => {
    return res.status(200).json({
      song: await ServicesUser.delete(req.params.id),
    });
  });
}

module.exports = Users;
