const { Router } = require('express');

const Playlist = require('./../services/playlists');

function Playlists(app) {
  const ServicesPlaylist = new Playlist();
  const router = new Router();

  app.use('/api/playlists', router);

  router.get('/', async (req, res) => {
    return res.status(200).json({
      Album: await ServicesPlaylist.getAll(),
    });
  });

  router.get('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await ServicesPlaylist.getOne(req.params.id),
    });
  });

  router.post('/', async (req, res) => {
    return res.status(200).json({
      Album: await ServicesPlaylist.create(req.body),
    });
  });

  router.put('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await ServicesPlaylist.update(req.params.id, req.body),
    });
  });

  router.delete('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await ServicesPlaylist.delete(req.params.id),
    });
  });
}

module.exports = Playlists;
