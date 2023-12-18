import FinishBooking from "./FinishBooking";
import { useContext } from "react";
import { MyContext } from "../contexts/MyContext";

export default function book() {
  const { sharedData } = useContext(MyContext);
  return <FinishBooking />;
}
