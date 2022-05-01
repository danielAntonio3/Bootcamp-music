const { Router } = require('express');
const Author = require('./../services/authors');

function Authors(app) {
  const authorService = new Author();
  const router = Router();

  app.use('/api/authors', router);

  router.get('/', async (req, res) => {
    return res.status(200).json({
      Album: await authorService.getAll(),
    });
  });

  router.get('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await authorService.getOne(req.params.id),
    });
  });

  router.post('/', async (req, res) => {
    return res.status(200).json({
      Album: await authorService.create(req.body),
    });
  });

  router.put('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await authorService.update(req.params.id, req.body),
    });
  });

  router.delete('/:id', async (req, res) => {
    return res.status(200).json({
      Album: await authorService.delete(req.params.id),
    });
  });
}

module.exports = Authors;
