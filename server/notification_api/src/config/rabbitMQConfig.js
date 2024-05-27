import amqp from "amqplib";
import { configDotenv } from "dotenv";

configDotenv();

const URL_RABBIT = process.env.URL_RABBIT;
const MAILING_QUEUE = process.env.MAILING_QUEUE;

export async function connectToRabbitMQ() {
  const connection = await amqp.connect(URL_RABBIT);
  const channel = await connection.createChannel();
  await channel.assertQueue(MAILING_QUEUE);
  return channel;
}
