import mongoose from "mongoose";

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
    console.log("Mongoose conectado.");
  });

  connection.on("error", (err) => {
    console.log(`Mongoose com error ${err}`);
  });

  connection.on("disconnected", () => {
    console.log("Mongoose desconectado");
  });
};

export default initDB;
