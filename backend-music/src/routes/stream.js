const { Router } = require("express");
const { readFileStream } = require("../libs/files");
const Streaming = require("../services/streaming");

function Stream(app) {
  const router = Router();
  const streaming = new Streaming();
  app.use("/api/stream", router);

  router.post("/", (req, res) => {
    const bb = readFileStream(req, streaming.uploadFile);

    req.pipe(bb);
    return res.json({
      success: true,
    });
  });
}

module.exports = Stream;
