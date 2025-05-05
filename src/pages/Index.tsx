import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
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

      {/* Главный баннер */}
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

      {/* Услуги */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-scale">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Scale" className="text-primary" />
                  Расторжение брака
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Юридическое сопровождение бракоразводного процесса с защитой интересов клиента.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Baby" className="text-primary" />
                  Опека и попечительство
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Помощь в установлении, оспаривании и прекращении опеки над детьми.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover-scale">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Building" className="text-primary" />
                  Раздел имущества
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Справедливый раздел совместно нажитого имущества при разводе.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* О нас */}
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

      {/* Отзывы */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Icon name="Star" className="text-yellow-400" />
                  <Icon name="Star" className="text-yellow-400" />
                  <Icon name="Star" className="text-yellow-400" />
                  <Icon name="Star" className="text-yellow-400" />
                  <Icon name="Star" className="text-yellow-400" />
                </div>
                <p className="italic mb-4">
                  "Благодаря профессиональной помощи юриста мне удалось отстоять свои права при разделе имущества. Очень благодарна за поддержку в трудный период жизни."
                </p>
                <div className="font-medium">Анна В., Москва</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Icon name="Star" className="text-yellow-400" />
                  <Icon name="Star" className="text-yellow-400" />
                  <Icon name="Star" className="text-yellow-400" />
                  <Icon name="Star" className="text-yellow-400" />
                  <Icon name="Star" className="text-yellow-400" />
                </div>
                <p className="italic mb-4">
                  "Обратился по вопросу алиментов и оформления опеки. Все вопросы были решены быстро и профессионально. Рекомендую!"
                </p>
                <div className="font-medium">Сергей Д., Санкт-Петербург</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Форма обратной связи */}
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

      {/* Футер */}
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
            &copy; 2025 ЮристПро. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;