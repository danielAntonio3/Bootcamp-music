const express = require("express");
const { PORT } = require("./config");
const stream = require("./router");

const app = express();

stream(app);

app.get("/", (req, res) => {
  return res.json({
    hola: "mundo",
  });
});

app.listen(PORT, () => {
  console.log(`Listening on: http://localhost:${PORT}`);
});
