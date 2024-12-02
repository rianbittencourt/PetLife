"use client";

import { useState } from "react";
import { Menu, X, PawPrint } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <PawPrint className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-primary">PetLife</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</Link>
              <Link href="#services" className="text-gray-600 hover:text-primary transition-colors">Serviços</Link>
              <Link href="#about" className="text-gray-600 hover:text-primary transition-colors">Sobre</Link>
              <Link href="#products" className="text-gray-600 hover:text-primary transition-colors">Produtos</Link>
              <Link href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contato</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link href="#home" className="block px-3 py-2 text-gray-600 hover:text-primary">Home</Link>
            <Link href="#services" className="block px-3 py-2 text-gray-600 hover:text-primary">Serviços</Link>
            <Link href="#about" className="block px-3 py-2 text-gray-600 hover:text-primary">Sobre</Link>
            <Link href="#products" className="block px-3 py-2 text-gray-600 hover:text-primary">Produtos</Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-600 hover:text-primary">Contato</Link>
          </div>
        </div>
      )}
    </nav>
  );
}