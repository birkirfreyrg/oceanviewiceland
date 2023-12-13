import FinishBooking from "../components/FinishBooking";
import Layout from "../components/Layout";

export default function book() {
  const [guests, setGuests] = useState(null);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  return (
    <Layout>
      <FinishBooking
        guests={guests}
        setGuests={setGuests}
        checkInDate={checkInDate}
        setCheckInDate={setCheckInDate}
        checkOutDate={checkOutDate}
        setCheckOutDate={setCheckOutDate}
      />
    </Layout>
  );
}
