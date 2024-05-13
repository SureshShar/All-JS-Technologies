const express = require("express");

const app = express();
const port = 1234;

app.get("/", (req, res) => {
  //   console.log(req);
    res.send("Hello World!");
//   res.send(req);
});
app.get("/a", (req, res) => {
  //   console.log(req);
  res.send(JSON.stringify(req));
});
app.get("/b", (req, res) => {
  //   console.log(req);
  res.send("Hello World! /b");
});
app.get("/a/b", (req, res) => {
  res.send("Hello World! /a/b");
});

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
