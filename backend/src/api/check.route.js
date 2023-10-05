import express from "express";
import { check, checkOK } from "./check.controller.js";
const router = express.Router();

const checkRouter = (app) => {
  router.get("/", checkOK);
  router.post("/check", check);

  app.use("/", router);
};

export default checkRouter;
