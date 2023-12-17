import { useState } from "react";
import Booking from "../components/Booking";
import Layout from "../components/Layout";
import Suite from "../components/Suite";
import FinishBooking from "../components/FinishBooking";
import Link from "next/link";

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
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/book">About Us</Link>
        </li>
      </ul>
    </>
  );
}
