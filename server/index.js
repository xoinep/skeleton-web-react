const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => res.sendStatus(200));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
