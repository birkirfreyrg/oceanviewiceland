import React from "react";
import Socials from "./Socials";
import Wrapper from "./Wrapper";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-white-700 p-4 shadow-md">
      <Wrapper>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-black font-thin text-2xl">
            <Link href="/">Ocean View Suite</Link>
          </h1>
          <Socials />
        </div>
      </Wrapper>
    </nav>
  );
}
