const { Schema, models, model } = require("mongoose");

const GuestSchema = new Schema({
  numberOfGuests: Number,
});

export const Guests = models?.Guests || model("Guests", GuestSchema);
