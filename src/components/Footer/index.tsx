import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-4 text-center bg-sky-100 text-black">
      {" "}
      &copy; {currentYear} Todos direitos reservados
    </div>
  );
}
