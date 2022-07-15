const multer = require("multer");

function uploadImage() {
  const storage = multer.diskStorage({
    destination: "./public/images",

    filename: function (req, file, cb) {
      cb(null, "/tmp/my-uploads");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix);
    },
  });

  const upload = multer({ storage: storage });

  return upload;
}

module.exports = uploadImage;
