import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import Doctor from "./Doctor.js";
import User from "./User.js";

const ReviewSchema = Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

ReviewSchema.pre(/^find/, (next) => {
  this.populate({
    path: "user",
    select: "name photo",
  });

  next();
});

ReviewSchema.statics.calcAverageRatings = async (doctorId) => {
  const stats = await this.aggregate([
    {
      $match: { doctor: doctorId },
    },
    {
      $group: {
        _id: "$doctor",
        numOfRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  await Doctor.findByIdAndUpdate(doctorId, {
    totalRating: stats[0].numOfRating,
    averageRating: stats[0].averageRating,
  });
};

ReviewSchema.post("save", () => {
  this.constructor.calcAverageRatings(this.doctor);
});

export default model("review", ReviewSchema);
