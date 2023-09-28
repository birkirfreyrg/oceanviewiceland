// pages/api/adddates.js
import { mongooseConnect } from "../../lib/mongoose"; // Import the MongoDB connection
import { Dates } from "../../models/Dates"; // Import the schema/model

export default async function handle(req, res) {
  if (req.method !== "POST") {
    res.json("should be a POST request");
    return;
  }
  const { checkInDate, checkOutDate, numberOfGuests } = req.body;

  await mongooseConnect();
  try {
    const DatesBooked = await Dates.create({
      checkInDate,
      checkOutDate,
      numberOfGuests,
    });
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
