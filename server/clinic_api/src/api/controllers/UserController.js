import User from "../models/User.js";

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("password");
    if (users.length == 0) res.status(404).json({ success: false, message: "No users found" });
    else res.status(200).json({ success: true, message: "Users found", users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error fetching users" });
  }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ success: false, message: `ID is required` });
  }

  try {
    const user = await User.findById(id).select("password");
    if (!user)
      res.status(404).json({ success: false, message: `No user found matching id ${id}` });
    else {
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
    return res.status(400).json({ success: false, message: `ID is required` });
  }

  try {
    const user = await User.findOneAndUpdate(id, { $set: req.body });
    if (!user)
      res
        .status(404)
        .json({ success: false, message: `No user found matching id ${req.body._id}` });
    else {
      res
        .status(200)
        .json({ success: true, message: "User updated successfully", user });
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
    return res.status(400).json({ success: false, message: `ID is required` });
  }

  try {
    const user = await User.findOneAndDelete(id, { $set: req.body });
    if (!user)
      res
        .status(404)
        .json({ message: `No user found matching id ${req.body._id}` });
    else {
      res
        .status(200)
        .json({ success: true, message: "User deleted successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error deleting user" });
  }
};
