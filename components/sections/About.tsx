import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Equipe altamente qualificada",
  "Ambiente limpo e seguro",
  "Atendimento personalizado",
  "Produtos premium"
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7"
              alt="Equipe PetLife"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sobre a PetLife
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Há mais de 10 anos cuidando dos pets com dedicação e amor. Nossa missão é proporcionar o melhor atendimento e cuidado para seu animal de estimação, garantindo seu bem-estar e felicidade.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg">Conheça Nossa História</Button>
          </div>
        </div>
      </div>
    </section>
  );
}