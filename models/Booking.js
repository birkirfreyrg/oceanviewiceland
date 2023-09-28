const { Schema, models, model } = require("mongoose");

const OrderSchema = new Schema({
  name: String,
  email: String,
  city: String,
  postalCode: String,
  streetAddress: String,
  country: String,
  paid: Boolean,
});

export const Order = models?.Order || model("Order", OrderSchema);
