import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <p className="text-lg text-gray-600">Estamos aqui para ajudar você e seu pet</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Endereço</h3>
              <p className="text-gray-600">Av. Principal, 123<br />São Paulo, SP</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Telefone</h3>
              <p className="text-gray-600">(11) 99999-9999<br />(11) 3333-3333</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">contato@petlife.com<br />suporte@petlife.com</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Nome" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Telefone" className="md:col-span-2" />
                <Textarea placeholder="Mensagem" className="md:col-span-2" rows={4} />
                <Button size="lg" className="md:col-span-2">Enviar Mensagem</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}