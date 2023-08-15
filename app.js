import express from "express";
import web from "./routes/web.js";
import { join } from "path";
import dotenv from "dotenv";

//Configure environment variables
dotenv.config();
const app = express();

// load router
app.use("/", web);

//set view engine
app.set("view engine", "ejs");

// load static files
app.use("/", express.static(join(process.cwd(), "public")));

app.get("*", (req, res) => {
  res.statusCode = 404;
  res.statusMessage = "bad request";
  res.render("notFound", { path: req.path.replace("/", "") });
});

// listen Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server runing on http://localhost:${port}`);
});
