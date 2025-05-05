
import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="p-4 border-b bg-white sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-playfair text-2xl font-bold text-primary">ЮристПро</div>
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="font-medium hover:text-primary transition-colors">Главная</Link>
          <Link to="/" className="font-medium hover:text-primary transition-colors">Услуги</Link>
          <Link to="/" className="font-medium hover:text-primary transition-colors">О нас</Link>
          <Link to="/" className="font-medium hover:text-primary transition-colors">Контакты</Link>
        </nav>
        <Button size="sm" className="bg-primary hover:bg-primary/90">
          <Icon name="Phone" className="mr-2" size={16} />
          Получить консультацию
        </Button>
      </div>
    </header>
  );
};

export default Header;
