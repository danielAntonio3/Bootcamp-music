const { Router } = require('express');
const auth = require('./../services/auth');

function Auth(app) {
  const router = new Router();
  const authService = new auth();

  app.use('/api/auth', router);

  // login of user
  router.post('/login', async (req, res) => {
    const user = await authService.login(req.body);
    res
      .cookie('token', user.token, {
        httpOnly: true,
        //maxAge: 1000 * 60 * 60 * 24 * 7,
        expires: new Date(new Date().setDate(new Date().getDate() + 7)),
        secure: false,
      })
      .json(user);

    return res.status(200).json({
      users: await authService.login(req.body),
    });
  });

  // create a user
  router.post('/signup', async (req, res) => {
    return res.status(200).json({
      users: await authService.signUp(req.body),
    });
  });
}

module.exports = Auth;
