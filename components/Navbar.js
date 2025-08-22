'use client'
import { useState } from "react";
import { Menu, X } from "lucide-react"; // you can replace with any icon lib
import Image from "next/image";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center px-6 py-6 lg:py-12">
      {/* Logo */}
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={150} // Set the *actual* or default size
        height={50} // Proportionally correct height
        className="w-[120px] lg:w-[150px] filter grayscale"
      />

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center justify-center gap-12 tracking-widest font-bold text-[12px]">
        <a href="#services">SERVICES</a>
        <a href="">RESUME</a>
        <a href="#portfolio">PORTFOLIO</a>
        <a href="#about">ABOUT</a>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </div>

      {/* Let's Chat Button */}
      <a
        href="#contact"
        className="hidden lg:block px-6 py-2 bg-black text-white rounded-full font-medium shadow-[0_0_10px_#dadada] hover:scale-104 transition duration-300"
      >
        Let's Chat
      </a>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 right-6  border rounded-xl w-[200px] bg-gray-500 text-center shadow-lg p-6 flex flex-col gap-4 text-[14px] font-semibold lg:hidden">
          <a href="#services" onClick={() => setIsOpen(false)}>SERVICES</a>
          <a href="" onClick={() => setIsOpen(false)}>RESUME</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)}>PORTFOLIO</a>
          <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-6 py-2 bg-black text-white rounded-full shadow-md"
          >
            Let's Chat
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
