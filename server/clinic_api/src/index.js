import express, { json } from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import AuthRouter from "./api/routes/auth.js";
import DoctorRouter from "./api/routes/doctor.js";
import UserRouter from "./api/routes/user.js";
import ReviewRouter from "./api/routes/review.js";
import BookingRouter from "./api/routes/booking.js";
import connectToMongoDB from "./config/databaseConfig.js";

configDotenv();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(json());
app.use(cors());
app.use(cookieParser());
app.use("/auth", AuthRouter);
app.use("/doctors", DoctorRouter);
app.use("/users", UserRouter);
app.use("/reviews", ReviewRouter);
app.use("/bookings", BookingRouter);

connectToMongoDB();

app.listen(PORT, (err) => {
  if (!err) console.log(`Server running on port ${PORT}`);
  else console.log(`Error running server \n${err}`);
});
