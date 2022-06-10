const express = require('express');
const cors = require('cors');
const router = require('./router');
const { PORT } = require('./config');

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

app.use(router);

app.get('/health', (req, res) => {
  return res.json({
    message: 'funciona',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
