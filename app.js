require("dotenv").config({ path: `${process.cwd()}/.env` });
const express = require("express");
const app = express();
const port = process.env.APP_PORT || 4000;
const authRoute = require("./route/authRoute");
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "welcome",
  });
});
app.use("/api/v1/auth/", authRoute);
app.use("", (req, res) => {
  res.status(404).sendFile("./views/page_not_found.html", { root: __dirname });
});
app.listen(port, () => {
  console.log(`runing port ${port}`);
});
