"use client";
import { useState } from "react";
import Link from "next/link";
import LiquidGlass from "./LiquidGlass";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex justify-center mt-2 px-4">
      <LiquidGlass
        borderRadius={50}
        backgroundOpacity={0.1}
        saturation={1}
        borderWidth={0.07}
        brightness={50}
        opacity={0.93}
        blur={11}
        displace={0.5}
        distortionScale={-180}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        width="100%"
        mixBlendMode="difference"
        className="relative max-w-6xl w-full"
      >
        <div className="flex items-center justify-between w-full px-6 py-4">
          <Link href="/" className="text-white font-semibold text-lg ">
            Tutla
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-200 hover:text-white">Home</Link>
            <Link href="/about" className="text-gray-200 hover:text-white">About</Link>
            <Link href="/contact" className="text-gray-200 hover:text-white">Contact</Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden px-6 pb-4 space-y-2">
            <Link href="/" className="block text-gray-200 hover:text-white">Home</Link>
            <Link href="/about" className="block text-gray-200 hover:text-white">About</Link>
            <Link href="/contact" className="block text-gray-200 hover:text-white">Contact</Link>
          </div>
        )}
      </LiquidGlass>
    </nav>
  );
}
