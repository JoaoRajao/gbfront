import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "/public/assets/images/logo.png"; // Caminho do logo

export default function Header() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-20 w-full items-center px-4 md:px-6 bg-gray-900 text-white shadow-md">
        {/* Logo */}
        <Link href="/" className="flex items-center mr-6" prefetch={false}>
          <Image src={logo} alt="Gracie Barra Logo" width={40} height={40} />
          <span className="ml-2 text-red-600 font-bold text-lg hidden lg:block">Gracie Barra</span>
        </Link>

        {/* Navegação */}
        <nav className="ml-auto flex items-center gap-4">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="#about" className="nav-link">About</Link>
   
          <Link href="#contact" className="nav-link">Contact</Link>

          {/* Botões de Login e Cadastro */}
          <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">Sign in</Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white">Sign Up</Button>
        </nav>
      </header>
    </div>
  );
}
