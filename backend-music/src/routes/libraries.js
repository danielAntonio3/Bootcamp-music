const { Router } = require('express');
const Library = require('./../services/libraries');

function Libraries(app) {
  const ServiceLibrary = new Library();
  const router = new Router();

  app.use('/api/libraries', router);

  router.get('/', async (req, res) => {
    return res.status(200).json({
      Album: await ServiceLibrary.getAll(),
    });
  });

  router.get('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await ServiceLibrary.getOne(req.params.id),
    });
  });

  router.post('/', async (req, res) => {
    return res.status(200).json({
      Album: await ServiceLibrary.create(req.body),
    });
  });

  router.put('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await ServiceLibrary.update(req.params.id, req.body),
    });
  });

  router.delete('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await ServiceLibrary.delete(req.params.id),
    });
  });
}

module.exports = Libraries;
