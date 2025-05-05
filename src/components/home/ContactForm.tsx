
import React from "react";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Получите бесплатную консультацию</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Ваше имя</label>
              <input 
                type="text" 
                id="name" 
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                placeholder="Иван Иванов"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Телефон</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            <div>
              <label htmlFor="question" className="block text-sm font-medium mb-1">Ваш вопрос</label>
              <textarea 
                id="question" 
                className="w-full rounded-md border border-input bg-background px-3 py-2 min-h-[100px]"
                placeholder="Опишите вашу ситуацию..."
              ></textarea>
            </div>
            <Button type="submit" className="w-full">Отправить</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
