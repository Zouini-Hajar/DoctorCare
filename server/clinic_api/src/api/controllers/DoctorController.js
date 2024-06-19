import Doctor from "../models/Doctor.js";
import Booking from "../models/Booking.js";

// Get all doctors
export const getAllDoctors = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({}).select("-password");
    }
    
    res
      .status(200)
      .json({ success: true, message: "Doctors found", data: doctors });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error fetching doctors" });
  }
};

// Get a single doctor by ID
export const getDoctorById = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ success: false, message: `ID is required` });
  }

  try {
    const doctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password");
    if (!doctor)
      res
        .status(404)
        .json({ success: false, message: `No doctor found matching id ${id}` });
    else {
      res.status(200).json({ success: true, message: "Doctor found", data: doctor });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error fetching doctor" });
  }
};

// Update an existing doctor by ID
export const updateDoctorById = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ success: false, message: `ID is required` });
  }

  try {
    const doctor = await Doctor.findOneAndUpdate(
      { _id: id },
      { $set: req.body }
    );
    if (!doctor)
      res
        .status(404)
        .json({ success: false, message: `No doctor found matching id ${id}` });
    else {
      res.status(200).json({
        success: true,
        message: "Doctor updated successfully",
        doctor,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error updating doctor" });
  }
};

// Delete a doctor by ID
export const deleteDoctorById = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ success: false, message: `ID is required` });
  }

  try {
    const doctor = await Doctor.findOneAndDelete(id, { $set: req.body });
    if (!doctor)
      res
        .status(404)
        .json({ success: false, message: `No doctor found matching id ${id}` });
    else {
      res
        .status(200)
        .json({ success: true, message: "Doctor deleted successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error deleting doctor" });
  }
};

export const getDoctorProfile = async (req, res) => {
  const doctorId = req.userId;
  try {
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }
    const { password, ...rest } = doctor._doc;
    const appointments = await Booking.find({ doctor: doctorId });
    res.status(200).json({
      success: true,
      message: "Doctor profile info",
      data: { ...rest, appointments },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong, cannot get" });
  }
};
