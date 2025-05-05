
import React from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">О нас</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Наша юридическая практика специализируется на семейном праве более 10 лет. 
            Мы помогли сотням семей разрешить споры и защитить свои права в сложных ситуациях.
          </p>
          <div className="flex justify-center">
            <Button variant="outline" className="flex items-center gap-2">
              <Icon name="Users" size={16} />
              Познакомиться с командой
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
