const { Schema, models, model } = require("mongoose");

const DatesSchema = new Schema(
  {
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    guests: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const Dates = models?.Dates || model("Dates", DatesSchema);
