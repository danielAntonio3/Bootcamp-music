const { Router } = require('express');
const Library = require('./../services/libraries');

function Libraries(app) {
  const libraryService = new Library();
  const router = new Router();

  app.use('/api/libraries', router);

  router.get('/', async (req, res) => {
    return res.status(200).json({
      Album: await libraryService.getAll(),
    });
  });

  router.get('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await libraryService.getOne(req.params.id),
    });
  });

  router.post('/', async (req, res) => {
    return res.status(200).json({
      Album: await libraryService.create(req.body),
    });
  });

  router.put('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await libraryService.update(req.params.id, req.body),
    });
  });

  router.delete('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await libraryService.delete(req.params.id),
    });
  });
}

module.exports = Libraries;
