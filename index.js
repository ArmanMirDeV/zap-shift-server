const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
require('dotenv').config()

//  MiddleWare

app.use(express.json())
app.use(cors());



app.get("/", (req, res) => {
  res.send("Hello World! zap is shifting shifting!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
