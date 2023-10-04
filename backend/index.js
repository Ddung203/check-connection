import express from "express";
import bodyParser from "body-parser";
import checkRouter from "./check.route.js";
import formidableMiddleware from "express-formidable";
import cors from "cors";

const app = express();
const port = 3030;

app.use(cors());
app.use(formidableMiddleware());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

checkRouter(app);

app.listen(port, () => {
  console.log(`On port: ${port}`);
});

//router

//middleware
