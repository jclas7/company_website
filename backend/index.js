const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("헬로 월드~~");
});

app.listen(PORT, () => {
  console.log("서버 리스닝...");
});
