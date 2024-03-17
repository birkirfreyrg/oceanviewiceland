import { mongooseConnect } from "@/lib/mongoose";
import { Dates } from "@/models/Dates";

export default async function handle(req, res) {
  await mongooseConnect();
  const ids = req.body.ids;
  res.json(await Dates.find({ _id: ids }));
}
