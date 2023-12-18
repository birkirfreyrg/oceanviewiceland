import { mongooseConnect } from "@/lib/mongoose";
import { Date } from "@/models/Dates";

export default async function handle(req, res) {
  await mongooseConnect();
  const ids = req.body.ids;
  res.json(await Date.find({ _id: ids }));
}
