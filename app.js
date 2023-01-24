const express = require("express");
var cors = require('cors')
const app = express();

app.use(cors())

const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.send("POST request"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

