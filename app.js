import express from "express";
import web from "./routes/web.js";
import { join } from "path";
const app = express();

// load router
app.use("/", web);

// load static files
app.use("/static", express.static(join(process.cwd(), "public")));

//set view engine
app.set("view engine", "ejs");

// listen Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server runing on http://localhost:${port}`);
});
