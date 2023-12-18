import { useState } from "react";
import FinishBooking from "../components/FinishBooking";
import Layout from "../components/Layout";
import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";

export default function book() {
  const { sharedData } = useContext(MyContext);
  return <FinishBooking />;
}
