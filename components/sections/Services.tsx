import { Bath, Scissors, Stethoscope, ShoppingBag } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
  {
    title: "Banho",
    description: "Banhos relaxantes com produtos especializados para cada tipo de pelagem",
    icon: Bath
  },
  {
    title: "Tosa",
    description: "Tosa profissional com equipamentos modernos e equipe especializada",
    icon: Scissors
  },
  {
    title: "Veterinária",
    description: "Atendimento veterinário completo para cuidar da saúde do seu pet",
    icon: Stethoscope
  },
  {
    title: "Pet Shop",
    description: "Produtos de qualidade para o bem-estar e diversão do seu animal",
    icon: ShoppingBag
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600">Oferecemos uma variedade de serviços para manter seu pet feliz e saudável</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}