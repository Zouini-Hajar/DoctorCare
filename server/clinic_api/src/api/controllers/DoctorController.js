import Doctor from "../models/Doctor.js";

// Get all doctors
export const getAllDoctors = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "password"
      );
    }

    if (doctors.length == 0)
      res.status(404).json({ success: false, message: "No doctors found" });
    else
      res
        .status(200)
        .json({ success: true, message: "Doctors found", doctors });
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
      .select("password");
    if (!doctor)
      res
        .status(404)
        .json({ success: false, message: `No doctor found matching id ${id}` });
    else {
      res.status(200).json({ success: true, message: "Doctor found", doctor });
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
    const doctor = await Doctor.findOneAndUpdate(id, { $set: req.body });
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
