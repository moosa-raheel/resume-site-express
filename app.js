import express from "express";
import web from "./routes/web.js";
import { join } from "path";
const app = express();

// load router
app.use("/", web);

// load static files
app.use("/", express.static(join(process.cwd(), "public")));

app.get("*", (req, res) => {
  res.render("notFound");
});
//set view engine
app.set("view engine", "ejs");

// listen Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server runing on http://localhost:${port}`);
});
