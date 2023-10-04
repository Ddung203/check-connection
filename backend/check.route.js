import express from "express";
import { check } from "./auth.controller.js";
const router = express.Router();

const checkRouter = (app) => {
  router.post("/check", check);

  app.use("/", router);
};

export default checkRouter;
