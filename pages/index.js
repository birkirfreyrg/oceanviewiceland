import Booking from "../components/Booking";
import Layout from "../components/Layout";
import Suite from "../components/Suite";

export default function Home() {
  return (
    <Layout>
      <Suite />
      <Booking />
    </Layout>
  );
}
