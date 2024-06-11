const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const posts = [
  { id: 1, title: "post1", content: "this is the first post" },
  { id: 2, title: "post2", content: "this is the se post" },
  { id: 3, title: "post3", content: "this is the 3 post" },
];

app.get("/post", (_, res) => {
  console.log("receoved get request at post");
  res.json(posts);
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
