import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import axios from "axios";

export default function Book() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [data, setData] = useState([]);

  async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProducts,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/fetchData");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  function displayMonth(monthNumber) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Check if the input monthNumber is within a valid range (1 to 12)
    if (monthNumber >= 1 && monthNumber <= 12) {
      // Subtract 1 from monthNumber to access the correct index in the array
      return months[monthNumber - 1];
    } else {
      return "Invalid Month";
    }
  }
  return (
    <Layout>
      <Wrapper>
        <div className="flex gap-4">
          <div className=" bg-white shadow-lg rounded-md p-8 w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Request to book
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Your picked dates
            </h3>
            <h4 className="text-l font-semibold text-gray-800 mb-1">Dates</h4>
            <div className="text-l text-gray-800 mb-4 font-thin">
              {data &&
              data[0] &&
              data[0].checkInDate &&
              data[0].checkOutDate ? (
                <>
                  {displayMonth(data[0].checkInDate.slice(5, 7))}
                  {" " + data[0].checkInDate.slice(8, 10)}
                  {" - " + data[0].checkOutDate.slice(8, 10)}
                </>
              ) : (
                "Loading..."
              )}
            </div>
            <h4 className="text-l font-semibold text-gray-800 mb-1">Guests</h4>
            <div className="text-l text-gray-800 mb-4 font-thin">
              {data && data[0] && data[0].numberOfGuests ? (
                <>{data[0].numberOfGuests + " guests"}</>
              ) : (
                "Loading..."
              )}
            </div>
            <div className="w-full h-0.5 bg-gray-200"></div>
            <div className=" flex justify-between mt-4">
              <h1 className="text-l font-semibold text-gray-800 w-1/2">
                Total (ISK)
              </h1>
              <h1 className="text-l font-semibold text-gray-800 w-1/2 text-right">
                98.000kr
              </h1>
            </div>
          </div>
          <div className=" bg-white shadow-lg rounded-md p-8 w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Order information
            </h2>
            <input
              className="w-full p-5 mb-5 border-2 border-solid border-gray-300 rounded-md box-border"
              type="text"
              placeholder="Name"
              value={name}
              name="name"
              onChange={(ev) => setName(ev.target.value)}
            />
            <input
              className="w-full p-5 mb-5 border-2 border-solid border-gray-300 rounded-md box-border"
              type="text"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <div className="flex gap-2">
              <input
                className="w-full p-5 mb-5 border-2 border-solid border-gray-300 rounded-md box-border"
                type="text"
                placeholder="City"
                value={city}
                name="city"
                onChange={(ev) => setCity(ev.target.value)}
              />
              <input
                className="w-full p-5 mb-5 border-2 border-solid border-gray-300 rounded-md box-border"
                type="text"
                placeholder="Postal Code"
                value={postalCode}
                name="postalCode"
                onChange={(ev) => setPostalCode(ev.target.value)}
              />
            </div>

            <input
              className="w-full p-5 mb-5 border-2 border-solid border-gray-300 rounded-md box-border"
              type="text"
              placeholder="Street Address"
              value={streetAddress}
              name="streetAddress"
              onChange={(ev) => setStreetAddress(ev.target.value)}
            />
            <input
              className="w-full p-5 mb-5 border-2 border-solid border-gray-300 rounded-md box-border"
              type="text"
              placeholder="Country"
              value={country}
              name="country"
              onChange={(ev) => setCountry(ev.target.value)}
            />

            <button
              className="bg-black text-white hover:bg-gray-800 hover:text-white py-2 px-4 rounded-lg shadow-lg"
              onClick={goToPayment}
            >
              Continue to payment
            </button>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}
