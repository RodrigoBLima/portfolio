import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-4 text-center bg-primary text-white">
      {" "}
      &copy; {currentYear} all right reserved
    </div>
  );
}
