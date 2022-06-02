const { Router } = require('express');
const Users = require('./users');

const router = Router();
const userServices = new Users();

// get all user
router.get('/', async (req, res) => {
  return res.status(200).json({
    users: await userServices.getAll(),
  });
});

// get id user
router.get('/byEmail', async (req, res) => {
  return res.status(200).json({
    user: await userServices.getOne(req.body.email),
  });
});

// create a user
router.post('/', async (req, res) => {
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

module.exports = router;
