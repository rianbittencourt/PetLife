import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 lg:pt-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587764379873-97837921fd44')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Cuidando do seu pet com amor e carinho
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Oferecemos serviços completos de pet shop, banho e tosa, veterinária
            e muito mais para seu melhor amigo
          </p>
          <div className="flex gap-4 sm:flex-row flex-col">
            <Button size="lg" className="gap-2">
              Agendar Visita
              <Heart className="w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10  text-white border-white/20"
            >
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
