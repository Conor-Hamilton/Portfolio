import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] w-full py-4 text-center text-gray-300">
      <p>© {new Date().getFullYear()} Conor Hamilton</p>
    </footer>
  );
}
