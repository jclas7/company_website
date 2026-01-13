require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParse = require("cookie-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;

const userRoutes = require("./routes/user");
const contactRoutees = require("./routes/contact");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParse());

app.use("/api/auth", userRoutes);
app.use("/api/contact", contactRoutees);

app.get("/", (req, res) => {
  res.send("헬로 월드~~");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("몽고db와 연결"))
  .catch((error) => console.log("연결실패:", error));

console.log(".. 리스닝...");

app.listen(PORT, () => {
  console.log("서버 리스닝...2");
});
