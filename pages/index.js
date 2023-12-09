import { useState } from "react";
import Booking from "../components/Booking";
import Layout from "../components/Layout";
import Suite from "../components/Suite";
import FinishBooking from "../components/FinishBooking";

export default function Home() {
  const [guests, setGuests] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Suite />
            <Booking
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              guests={guests}
              setGuests={setGuests}
            />
          </>
        );
      case "bookingPage":
        return (
          <>
            <FinishBooking guests={guests} setGuests={setGuests} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("bookingPage")}>About</button>
        {renderPage()}
      </div>
    </Layout>
  );
}
