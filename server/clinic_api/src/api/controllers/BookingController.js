import Booking from "../models/Booking.js";

// Get all bookings
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    if (bookings.length == 0)
      res.status(404).json({ message: "No bookings found" });
    else res.status(200).json(bookings);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// Get a single booking by ID
export const getBookingById = async (req, res) => {
  const booking = await Booking.findOne();
};

// Create a new booking
export const createBooking = async (req, res) => {
  //
};

// Update an existing booking by ID
export const updateBookingById = async (req, res) => {
  //
};

// Delete an booking by ID
export const deleteBookingById = async (req, res) => {
  //
};
