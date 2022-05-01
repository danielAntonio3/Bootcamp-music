const { Router } = require('express');
const auth = require('./../services/auth');

function Auth(app) {
  const router = new Router();
  const authService = new auth();

  app.use('/api/auth', router);

  // login of user
  router.post('/login', async (req, res) => {
    // console.log(req.body);
    return res.status(200).json({
      users: await authService.login(req.body),
    });
  });

  // create a user
  router.post('/signup', async (req, res) => {
    // console.log(req.body);
    return res.status(200).json({
      users: await authService.signUp(req.body),
    });
  });
}

module.exports = Auth;
