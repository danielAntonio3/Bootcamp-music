const { Router } = require('express');
const auth = require('./auth');

const router = new Router();
const authService = new auth();

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

router.post('/validate', async (req, res) => {
  const { token } = req.body;
  const result = await authService.validate(token);
  return res.status(result.success ? 200 : 400).json({
    result,
  });
});

module.exports = router;
