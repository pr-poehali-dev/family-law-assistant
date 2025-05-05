
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Расторжение брака",
      description: "Юридическое сопровождение бракоразводного процесса с защитой интересов клиента.",
      iconName: "Scale"
    },
    {
      title: "Опека и попечительство",
      description: "Помощь в установлении, оспаривании и прекращении опеки над детьми.",
      iconName: "Baby"
    },
    {
      title: "Раздел имущества",
      description: "Справедливый раздел совместно нажитого имущества при разводе.",
      iconName: "Building"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              iconName={service.iconName} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
