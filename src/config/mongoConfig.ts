import mongoose from "mongoose";
import logger from "./logger";

const { MONGO_URL } = process.env;

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

const initDB = async () => {
  mongoose.connect(MONGO_URL, mongooseOptions);

  const { connection } = mongoose;

  connection.on("connected", () => {
    logger.info("Mongoose conectado.");
  });

  connection.on("error", (err) => {
    logger.error(`Mongoose com error ${err}`);
  });

  connection.on("disconnected", () => {
    logger.info("Mongoose desconectado");
  });
};

export default initDB;
