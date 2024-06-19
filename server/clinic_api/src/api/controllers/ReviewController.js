import Review from "../models/Review.js";
import Doctor from "../models/Doctor.js";

// Get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});

    if (reviews.length == 0)
      res.status(404).json({ success: false, message: "No reviews found" });
    else
      res
        .status(200)
        .json({ success: true, message: "Reviews found", reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching reviews" });
  }
};


// Create new review
export const createReview = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.params.userId;

  try {
    const review = await Review.create(req.body);

    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: review._id },
    });

    res.status(200).json({ success: true, message: "Review submitted." });
  } catch(error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error creating review" });
  }
};
