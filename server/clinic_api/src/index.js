import express, { json } from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import connectToMongoDB from "./config/databaseConfig";
import { connectToRabbitMQ } from "./config/rabbitMqConfig";
import PatientRouter from "./api/routes/patient";
import DoctorRouter from "./api/routes/doctor";
import MedicalRecordRouter from "./api/routes/medicalRecord";
import MedicineRouter from "./api/routes/medicine";
import AppointmentRouter from "./api/routes/appointment";
import ArticleRouter from "./api/routes/article";

configDotenv();

const PORT = process.env.PORT;

const app = express();

app.use(json());
app.use(cors());
app.use('/patient', PatientRouter);
app.use('/doctor', DoctorRouter);
app.use('/medical-record', MedicalRecordRouter);
app.use('/medicine', MedicineRouter);
app.use('/appointment', AppointmentRouter);
app.use('/article', ArticleRouter);

connectToMongoDB();

connectToRabbitMQ()
  .then(() => console.log("Connected to RabbitMQ"))
  .catch((err) => console.log(`Unable to connect to RabbitMQ \n${err}`));

app.listen(PORT, (err) => {
  if (!err) console.log(`Server running on port ${PORT}`);
  else console.log(`Error running server \n${err}`);
});
