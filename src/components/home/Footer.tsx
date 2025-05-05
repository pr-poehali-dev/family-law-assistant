
import React from "react";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ЮристПро</h3>
            <p className="text-gray-400">
              Профессиональная юридическая помощь по вопросам семейного права.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва, ул. Юридическая, 10
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@yuristpro.ru
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:text-primary">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-primary">
                <Icon name="Telegram" size={24} />
              </a>
              <a href="#" className="hover:text-primary">
                <Icon name="Vk" size={24} />
              </a>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-gray-800" />
        <div className="text-center text-gray-500">
          © 2025 ЮристПро. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
