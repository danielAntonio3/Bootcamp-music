const express = require('express');
const router = require('./router');
const { PORT } = require('./config');

const app = express();

app.use(express.json());

app.use('/api/users', router);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
