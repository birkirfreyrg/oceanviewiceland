import { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";

export default function FinishBooking() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const { sharedData } = useContext(MyContext);
  const checkInDate = sharedData[0];
  const checkOutDate = sharedData[1];
  const guests = sharedData[2];
  const time_difference = checkOutDate?.getTime() - checkInDate?.getTime();
  const days_difference = time_difference / (1000 * 60 * 60 * 24);
  const price = days_difference * 16900;

  async function goToPayment() {
    console.log(name);
    console.log(email);
    console.log(city);
    console.log(postalCode);
    console.log(streetAddress);
    console.log(country);
    console.log(sharedData);
    // Commented out database action for vercel deployment.
    /*const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      sharedData,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }*/
  }
  function displayMonth(monthNumber) {
    monthNumber = monthNumber + 1;
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
            {
              <>
                {displayMonth(checkInDate.getMonth())}
                {" " + checkInDate?.getDate()}
                {", " + checkInDate?.getFullYear()}
                <div />
                {displayMonth(checkOutDate?.getMonth())}
                {"  " + checkOutDate?.getDate()}
                {", " + checkOutDate?.getFullYear()}
              </>
            }
          </div>
          <h4 className="text-l font-semibold text-gray-800 mb-1">Guests</h4>
          <div className="text-l text-gray-800 mb-4 font-thin">{guests}</div>
          <div className="w-full h-0.5 bg-gray-200"></div>
          <div className=" flex justify-between mt-4">
            <h1 className="text-l font-semibold text-gray-800 w-1/2">
              Total (ISK)
            </h1>
            <h1 className="text-l font-semibold text-gray-800 w-1/2 text-right">
              {new Intl.NumberFormat("is-IS", {
                style: "currency",
                currency: "ISK",
              }).format(price)}
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
  );
}
