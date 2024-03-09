import { mongooseConnect } from "../../lib/mongoose"; // Import the MongoDB connection
import { Dates } from "../../models/Dates"; // Import the schema/model
/*
export default async (req, res) => {
  try {
    const data = await Dates.find(); // Fetch data from the database
    res.status(200).json(data); // Send the data as a JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
*/
