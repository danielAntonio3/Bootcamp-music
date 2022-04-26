const express = require('express');
const Songs = require('./routes/songs');

const { PORT } = require('./config');

// iniciar cliente
const app = express();

// Recibir tipo json
app.use(express.json());

// Incorporando rutas
Songs(app);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
