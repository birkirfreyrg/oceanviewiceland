import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Dates } from "@/models/Dates";
const stripe = require("stripe")(process.env.STRIPE_SK);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.json("should be a POST request");
    return;
  }

  const { name, email, city, postalCode, streetAddress, country, sharedData } =
    req.body;
  await mongooseConnect();

  const bookingsIds = sharedData;
  const uniqueIds = [...new Set(bookingsIds)];
  const bookingInfos = await Dates.find({ _id: uniqueIds });

  let line_items = [];
  for (const bookingId of uniqueIds) {
    const bookingInfo = bookingInfos.find(
      (b) => b._id.toString() === bookingId
    );
    if (bookingInfo) {
      line_items.push({
        price_data: {
          currency: "ISK",
          booking_data: {
            checkInDate: bookingInfo.checkInDate,
            checkOutDate: bookingInfo.checkOutDate,
            guests: bookingInfo.guests,
          },
          booking_amount: bookingInfo.price,
        },
      });
    }
  }

  const orderDoc = await Order.create({
    line_items,
    name,
    email,
    city,
    postalCode,
    streetAddress,
    country,
    paid: false,
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    customer_email: email,
    success_url: process.env.PUBLIC_URL + "/book?success=1",
    cancel_url: process.env.PUBLIC_URL + "/book?canceled=1",
    metadata: { orderId: orderDoc._id.toString() },
  });

  res.json({
    url: session.url,
  });
}
