const express = require("express");
var cors = require('cors')
const app = express();
const multer = require('multer');
const upload = multer();

app.use(cors())
app.use(express.urlencoded({ extended: true }));


const port = process.env.PORT || 3001;

app.get("/", upload.none(), (req, res) => res.send("POST request"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

