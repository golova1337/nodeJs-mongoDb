const multer = require("multer");
const path = require("path");

const uploadDir = path.join(process.cwd(), "src/infrastructure/multer/tmp/my-uploads");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
