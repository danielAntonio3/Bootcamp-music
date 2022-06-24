const { Router } = require("express");
const { readFileStream } = require("./libs/files");
const Streaming = require("./streaming");

function stream(app) {
  const router = Router();
  const streaming = new Streaming();
  app.use("/api/stream", router);

  router.get("/:fileName", (req, res) => {
    streaming.downloadFile(req.params.fileName, res);
  });

  router.post("/", (req, res) => {
    readFileStream(req, res, streaming.uploadFile);
  });
}

module.exports = stream;
