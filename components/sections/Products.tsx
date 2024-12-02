import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Ração Premium",
    price: "R$ 129,90",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119"
  },
  {
    name: "Brinquedo Interativo",
    price: "R$ 49,90",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97"
  },
  {
    name: "Cama Luxo",
    price: "R$ 199,90",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6"
  },
  {
    name: "Kit Higiene",
    price: "R$ 89,90",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Produtos em Destaque</h2>
          <p className="text-lg text-gray-600">Selecionamos os melhores produtos para seu pet</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4 p-6">
                <div>
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-primary font-bold">{product.price}</p>
                </div>
                <Button className="w-full">Adicionar ao Carrinho</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}