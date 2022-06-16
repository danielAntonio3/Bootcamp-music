const busboy = require("busboy");

const readFileStream = (req, onFile) => {
  const bb = busboy({
    headers: req.headers,
  });
  bb.on("file", onFile);

  return bb;
};

module.exports = {
  readFileStream,
};
