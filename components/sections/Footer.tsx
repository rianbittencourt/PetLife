import { PawPrint, Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="h-8 w-8" />
              <span className="text-xl font-bold">PetLife</span>
            </div>
            <p className="text-gray-400">
              Cuidando do seu pet com amor e dedicação desde 2013.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-white transition-colors">Serviços</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre</Link></li>
              <li><Link href="#products" className="text-gray-400 hover:text-white transition-colors">Produtos</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Horário</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Segunda - Sexta: 8h às 19h</li>
              <li>Sábado: 9h às 18h</li>
              <li>Domingo: 9h às 14h</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PetLife. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}