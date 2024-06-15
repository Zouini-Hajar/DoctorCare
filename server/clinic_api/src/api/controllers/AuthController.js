import User from "../models/User.js";
import Doctor from "../models/Doctor.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

export const register = async (req, res) => {
  const { email, role, password } = req.body;

  try {
    // Check if a user already exists
    let existingUser;

    if (role == "patient") existingUser = await User.findOne({ email });
    else if (role == "doctor") existingUser = await Doctor.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let user;

    if (role == "patient") {
      user = await User.create({
        ...req.body,
        password: hashedPassword,
      });
    }

    if (role == "doctor") {
      user = await Doctor.create({
        ...req.body,
        password: hashedPassword,
      });
    }

    return res.status(200).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while creating new user",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if a user exists
    let user =
      (await User.findOne({ email })) || (await Doctor.findOne({ email }));

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify password
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      // Generate access and refresh tokens
      const token = generateAccessToken(user);

      const { role, password, appointments, ...data } = user;
      return res.status(200).json({
        success: true,
        message: "User logged in successfully",
        token,
        role,
        data,
      });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error while logging in",
    });
  }
};
