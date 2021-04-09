import express from "express";
import cors from "cors";
import routes from "./routes";
import bodyParser from "body-parser";
import "dotenv/config";

import initDB from "./config/mongoConfig";
import logger from "./config/logger";

initDB();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.options("/", cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
});

app.use(routes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  logger.info(`App listening at port ${port}.`);
});
