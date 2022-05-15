const { Router } = require('express');
const Song = require('./../services/songs');
const { authValidation } = require('./../middleware/auth');

function Songs(app) {
  const SongServices = new Song();
  const router = new Router();

  app.use('/api/songs', router);

  // get all songs
  router.get('/', [authValidation], async (req, res) => {
    return res.status(200).json({
      songs: await SongServices.getAll(),
    });
  });

  // get id song
  router.get('/:id', async (req, res) => {
    return res.status(200).json({
      song: await SongServices.getOne(req.params.id),
    });
  });

  // create a song
  router.post('/', async (req, res) => {
    // console.log(req.body);
    return res.status(200).json({
      song: await SongServices.create(req.body),
    });
  });

  // update a song
  router.put('/:id', async (req, res) => {
    return res.status(200).json({
      song: await SongServices.update(req.params.id, req.body),
    });
  });

  // delete a song
  router.delete('/:id', async (req, res) => {
    return res.status(200).json({
      song: await SongServices.delete(req.params.id),
    });
  });
}

module.exports = Songs;
