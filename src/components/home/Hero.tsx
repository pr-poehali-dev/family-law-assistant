
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Семейное право: профессиональная юридическая помощь</h1>
          <p className="text-muted-foreground text-lg mb-6">
            Специализируемся на решении семейных споров, защите прав и интересов в сложных жизненных ситуациях.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline">
              Узнать больше
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
          <img 
            src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=800&auto=format&fit=crop&q=80" 
            alt="Юрист по семейному праву" 
            className="rounded-lg shadow-xl" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
