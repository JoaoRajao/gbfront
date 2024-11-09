import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"; // Assumindo que você tenha um componente Button no ShadCN
import Image from 'next/image';
import logo from '/public/assets/images/logo.png'; // Assumindo que o logo está em /public/assets/images

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-gray-900 text-white shadow-md">
      
      <div className="flex items-center">
        <Link href="/">
          <Image src={logo} alt="Logo" width={40} height={40} className="mr-2" />
        </Link>
        <span className="font-bold text-lg text-red-600">Gracie Barra</span>
      </div>

      <nav className="flex items-center space-x-6">
        <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
        <Link href="#about" className="hover:text-red-600 transition-colors">Sobre</Link>
        <Link href="#class" className="hover:text-red-600 transition-colors">Aulas</Link>
        <Link href="#contact" className="hover:text-red-600 transition-colors">Contato</Link>
        <Link href="/login">
          <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md">Login</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
