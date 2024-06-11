import express from "express";
import { configDotenv } from "dotenv";
import transporter from "./config/mailerConfig";

configDotenv();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

connectRabbitMQ()
  .then((channel) => {
    // To be implemented later
  })
  .catch((err) => console.log(`Unable to connect to RabbitMQ \n${err}`));

app.listen(PORT, (err) => {
  if (!err) console.log(`Server running on port ${PORT}`);
  else console.log(`Error running server \n${err}`);
});
