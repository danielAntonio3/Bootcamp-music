const { Router } = require('express');
const Song = require('./../services/songs');

function Songs(app) {
  const SongServices = new Song();
  const router = new Router();

  app.use('/songs', router);

  // get all songs
  router.get('/', async (req, res) => {
    return res.status(200).json({
      message: 'get all songs',
      songs: await SongServices.getAll(),
    });
  });

  // get id song
  router.get('/:id', async (req, res) => {
    return res.status(200).json({
      message: 'get id song',
      song: await SongServices.getOne(req.params.id),
    });
  });

  // create a song
  router.post('/', async (req, res) => {
    // console.log(req.body);
    return res.status(200).json({
      message: 'create a song',
      song: await SongServices.create(req.body),
    });
  });

  // update a song
  router.put('/:id', (req, res) => {});

  // delete a song
  router.delete('/:id', (req, res) => {});
}

module.exports = Songs;
