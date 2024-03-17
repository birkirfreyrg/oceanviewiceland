import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import Wrapper from "./Wrapper";
import Info from "./Info";
import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";
import Link from "next/link";

export default function Booking(props) {
  const { sharedData, updateSharedData } = useContext(MyContext);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guests, setGuests] = useState(null);

  const guestOptions = [
    { value: "1", label: "1 Guest" },
    { value: "2", label: "2 Guests" },
    { value: "3", label: "3 Guests" },
    { value: "4", label: "4 Guests" },
  ];

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
  };

  const handleGuestsChange = (selectedOption) => {
    setGuests(selectedOption);
  };

  function ConfirmDates(checkInDate, checkOutDate, numberOfGuests) {
    if (checkInDate > checkOutDate) {
      throw new Error(
        "Check-in Date can't be sooner then the Check-out date! Please try again."
      );
    }
    const bookingData = [checkInDate, checkOutDate, numberOfGuests];

    updateSharedData(bookingData);
    console.log("update: " + sharedData);
  }

  return (
    <Wrapper>
      <div className="w-full grid grid-cols-7 gap-1">
        <div className="col-span-5">
          <Info />
        </div>
        <div className="col-span-2">
          <h2 className="mt-4 font-custom font-thin">Booking</h2>
          <div className="mb-4">
            <label className="block pl-1 font-custom">Check-in Date:</label>
            <DatePicker
              selected={checkInDate}
              placeholderText="Select Check-in Date"
              onChange={handleCheckInChange}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              className="border border-gray-400 p-2 rounded-md font-custom"
            />
          </div>
          <div className="mb-4 font-custom">
            <label className="block pl-1">Check-out Date:</label>
            <DatePicker
              selected={checkOutDate}
              onChange={handleCheckOutChange}
              dateFormat="dd/MM/yyyy"
              minDate={checkInDate || new Date()}
              placeholderText="Select Check-out Date"
              className="border border-gray-400 p-2 rounded-md font-custom"
            />
          </div>
          <div className="mb-4 font-custom">
            <label className="block pl-1 font-custom">Number of Guests:</label>
            <Select
              options={guestOptions}
              value={guests}
              onChange={handleGuestsChange}
              isSearchable={false}
              placeholder="Select guests"
            />
          </div>
          <Link href="/book" passHref legacyBehavior>
            <button
              onClick={() =>
                ConfirmDates(checkInDate, checkOutDate, guests.value)
              }
              className="bg-black text-white px-4 py-2 rounded font-custom"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
