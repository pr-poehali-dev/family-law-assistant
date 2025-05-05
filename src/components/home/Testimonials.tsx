
import React from "react";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const testimonials = [
    {
      text: "\"Благодаря профессиональной помощи юриста мне удалось отстоять свои права при разделе имущества. Очень благодарна за поддержку в трудный период жизни.\"",
      author: "Анна В., Москва"
    },
    {
      text: "\"Обратился по вопросу алиментов и оформления опеки. Все вопросы были решены быстро и профессионально. Рекомендую!\"",
      author: "Сергей Д., Санкт-Петербург"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index} 
              text={testimonial.text} 
              author={testimonial.author} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
