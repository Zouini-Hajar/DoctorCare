import express from "express";
import { configDotenv } from "dotenv";

configDotenv();

const PORT = process.env.PORT;
const MAILING_QUEUE = process.env.MAILING_QUEUE;

const app = express();

app.use(express.json());

connectRabbitMQ()
  .then((channel) => console.log("Connected to RabbitMQ"))
  .catch((err) => console.log(`Unable to connect to RabbitMQ \n${err}`));

app.listen(PORT, (err) => {
  if (!err) console.log(`Server running on port ${PORT}`);
  else console.log(`Error running server \n${err}`);
});
