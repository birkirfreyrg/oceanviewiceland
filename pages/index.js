import { useState } from "react";
import Booking from "../components/Booking";
import Layout from "../components/Layout";
import Suite from "../components/Suite";
import FinishBooking from "../components/FinishBooking";
import { Link } from "react-router-dom";

export default function Home() {
  const [guests, setGuests] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Suite />
            <Booking
              guests={guests}
              setGuests={setGuests}
              checkInDate={checkInDate}
              setCheckInDate={setCheckInDate}
              checkOutDate={checkOutDate}
              setCheckOutDate={setCheckOutDate}
            />
          </>
        );
      case "bookingPage":
        return (
          <>
            <FinishBooking
              guests={guests}
              setGuests={setGuests}
              checkInDate={checkInDate}
              setCheckInDate={setCheckInDate}
              checkOutDate={checkOutDate}
              setCheckOutDate={setCheckOutDate}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Suite />
      <Booking
        guests={guests}
        setGuests={setGuests}
        checkInDate={checkInDate}
        setCheckInDate={setCheckInDate}
        checkOutDate={checkOutDate}
        setCheckOutDate={setCheckOutDate}
      />
      <Link to={`/targetPage/${dataToSend}`}>Go to Target Page</Link>
    </Layout>
  );
}
