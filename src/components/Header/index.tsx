import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const navLinks = [
    { href: "/#about", label: "Sobre" },
    { href: "/#projects", label: "Projetos" },
    { href: "/#contact", label: "Contato" },
  ];

  return (
    <header className="z-10 py-5 px-5 bg-sky-100 text-black fixed w-full">
      <div className="container mx-auto flex justify-end md:justify-between items-center">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex container justify-end md:gap-6" role="navigation">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-gray-300">
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <button
            onClick={handleToggle}
            className="focus:outline-none"
            aria-label="Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>

          <nav
            className={`fixed top-0 left-0 w-full h-full bg-sky-100 transition-transform duration-300 flex flex-col items-center justify-center ${isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            role="navigation"
            aria-hidden={!isOpen}
          >
            <ul className="space-y-6 text-lg">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
