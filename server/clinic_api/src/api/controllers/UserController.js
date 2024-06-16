import User from "../models/User.js";
import Booking from "../models/Booking.js";
import Doctor from "../models/Doctor.js";

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");
    if (users.length === 0) {
      res.status(404).json({ success: false, message: "No users found" });
    } else {
      res.status(200).json({ success: true, message: "Users found", users });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error fetching users" });
  }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ success: false, message: "ID is required" });
  }

  try {
    const user = await User.findById(id).select("-password");
    if (!user) {
      res.status(404).json({ success: false, message: `No user found matching id ${id}` });
    } else {
      res.status(200).json({ success: true, message: "User found", user });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error fetching user" });
  }
};

// Update an existing user by ID
export const updateUserById = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ success: false, message: "ID is required" });
  }

  try {
    const user = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });
    if (!user) {
      res.status(404).json({ success: false, message: `No user found matching id ${id}` });
    } else {
      res.status(200).json({ success: true, message: "User updated successfully", user });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error updating user" });
  }
};

// Delete a user by ID
export const deleteUserById = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ success: false, message: "ID is required" });
  }

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(404).json({ success: false, message: `No user found matching id ${id}` });
    } else {
      res.status(200).json({ success: true, message: "User deleted successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error deleting user" });
  }
};

// Get user profile
export const getUserProfile = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, message: "Profile info is getting", data: user });
  } catch (err) {
    res.status(500).json({ success: false, message: "Something went wrong, cannot fetch profile info" });
  }
};

// Get my appointments
export const getMyAppointments = async (req, res) => {
  try {
    // Step 1: Retrieve appointments from booking for specific user
    const bookings = await Booking.find({ user: req.userId });

    // Step 2: Extract doctor ids from appointment bookings
    const doctorIds = bookings.map((el) => el.doctor);

    // Step 3: Retrieve doctors using doctor ids
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select("-password");

    res.status(200).json({
      success: true,
      message: "Appointments are getting",
      data: doctors,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Something went wrong, cannot get appointments" });
  }
};
