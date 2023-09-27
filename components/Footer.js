import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-4 flex bottom-0 w-full">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} Ocean View Suite
      </div>
    </footer>
  );
}
