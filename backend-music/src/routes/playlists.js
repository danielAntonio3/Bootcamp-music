const { Router } = require('express');

const Playlist = require('./../services/playlists');
const { authValidation } = require('./../middleware/auth');

function Playlists(app) {
  const playlistServices = new Playlist();
  const router = new Router();

  app.use('/api/playlists', router);

  router.get('/', async (req, res) => {
    return res.status(200).json({
      Album: await playlistServices.getAll(),
    });
  });

  router.get('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await playlistServices.getOne(req.params.id),
    });
  });

  router.post('/', [authValidation], async (req, res) => {
    const { id } = req.user;
    return res.status(200).json({
      Album: await playlistServices.create(req.body, id),
    });
  });

  router.put('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await playlistServices.update(req.params.id, req.body),
    });
  });

  router.delete('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await playlistServices.delete(req.params.id),
    });
  });
}

module.exports = Playlists;
