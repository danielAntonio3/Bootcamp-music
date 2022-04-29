const { Router } = require('express');
const Album = require('./../services/albums');

function Albums(app) {
  const ServiceAlbum = new Album();
  const router = new Router();

  app.use('/api/albums', router);

  router.get('/', async (req, res) => {
    return res.status(200).json({
      Album: await ServiceAlbum.getAll(),
    });
  });

  router.get('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await ServiceAlbum.getOne(req.params.id),
    });
  });

  router.post('/', async (req, res) => {
    return res.status(200).json({
      Album: await ServiceAlbum.create(req.body),
    });
  });

  router.put('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await ServiceAlbum.update(req.params.id, req.body),
    });
  });

  router.delete('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await ServiceAlbum.delete(req.params.id),
    });
  });
}

module.exports = Albums;
