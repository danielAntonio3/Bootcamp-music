const { uploadFile, downloadFile } = require("./libs/storage");

class Streaming {
  downloadFile(name, writableStream) {
    downloadFile(name, writableStream);
  }

  async uploadFile(file, info) {
    const { filename } = info;

    return await uploadFile(filename, file);
  }
}

module.exports = Streaming;
