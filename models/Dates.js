const { Schema, models, model } = require("mongoose");

const DatesSchema = new Schema({
  checkInDate: Object,
  checkOutDate: Object,
  numberOfGuests: Number,
});

export const Dates = models?.Dates || model("Dates", DatesSchema);
