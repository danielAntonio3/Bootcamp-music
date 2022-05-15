const express = require('express');
const cookie = require('cookie-parser');

const Albums = require('./routes/albums');
const Auth = require('./routes/auth');
const Authors = require('./routes/authors');
const Libraries = require('./routes/libraries');
const Playlists = require('./routes/playlists');
const Songs = require('./routes/songs');
const Users = require('./routes/users');

const { PORT } = require('./config');

// iniciar cliente
const app = express();

// middlewares:
app.use(cookie());

// Recibir tipo json
app.use(express.json());

// Incorporando rutas
Auth(app);
Albums(app);
Authors(app);
Libraries(app);
Playlists(app);
Songs(app);
Users(app);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
