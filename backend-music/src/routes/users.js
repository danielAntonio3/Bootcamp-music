const { Router } = require('express');
const User = require('./../services/users');

function Users(app) {
  const userServices = new User();
  const router = new Router();

  app.use('/api/users', router);

  // get all user
  router.get('/', async (req, res) => {
    return res.status(200).json({
      users: await userServices.getAll(),
    });
  });

  // get id user
  router.get('/:id', async (req, res) => {
    return res.status(200).json({
      user: await userServices.getOne(req.params.id),
    });
  });

  // create a user
  router.post('/', async (req, res) => {
    // console.log(req.body);
    return res.status(200).json({
      users: await userServices.create(req.body),
    });
  });

  // update a user
  router.put('/:id', async (req, res) => {
    return res.status(200).json({
      user: await userServices.update(req.params.id, req.body),
    });
  });

  // delete a user
  router.delete('/:id', async (req, res) => {
    return res.status(200).json({
      user: await userServices.delete(req.params.id),
    });
  });
}

module.exports = Users;
