import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary text-glow">GloomyPost</h1>
          <div className="hidden md:flex gap-6">
            {['Главная', 'Геймплей', 'История', 'Персонажи', 'Новости', 'Сообщество'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-all hover:text-primary ${
                  activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <Button variant="outline" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      <section id="главная" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/59315384-570f-4554-b6b2-61fda036b317/files/50e0edd8-6361-4105-a0ef-43eaae60de0c.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px)',
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">GloomyPost</h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Погрузитесь в мрачный мир постапокалипсиса, где каждое решение определяет вашу судьбу
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="animate-glow-pulse bg-primary hover:bg-primary/90">
              <Icon name="Play" size={20} className="mr-2" />
              Играть сейчас
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать
            </Button>
          </div>
        </div>
      </section>

      <section id="геймплей" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-glow animate-fade-in-up">Геймплей</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-card border-border hover:border-primary transition-all animate-fade-in-up">
              <div
                className="w-full h-64 mb-6 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://cdn.poehali.dev/projects/59315384-570f-4554-b6b2-61fda036b317/files/08934bf4-dc25-432f-a411-190f9107e19f.jpg')`,
                }}
              />
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Gamepad2" size={28} className="text-primary" />
                Исследование
              </h3>
              <p className="text-muted-foreground">
                Путешествуйте по опустошённым локациям, раскрывайте тайны мира и находите редкие ресурсы для выживания
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-all animate-fade-in-up">
              <div className="w-full h-64 mb-6 rounded-lg bg-muted flex items-center justify-center">
                <Icon name="Zap" size={80} className="text-primary opacity-50" />
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Sword" size={28} className="text-secondary" />
                Боевая система
              </h3>
              <p className="text-muted-foreground">
                Тактические сражения в реальном времени с уникальными способностями и комбинациями атак
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-all animate-fade-in-up">
              <div className="w-full h-64 mb-6 rounded-lg bg-muted flex items-center justify-center">
                <Icon name="Users" size={80} className="text-secondary opacity-50" />
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon name="MessageSquare" size={28} className="text-primary" />
                Диалоги и выборы
              </h3>
              <p className="text-muted-foreground">
                Ваши решения влияют на сюжет и отношения с персонажами. Каждый выбор имеет последствия
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-all animate-fade-in-up">
              <div className="w-full h-64 mb-6 rounded-lg bg-muted flex items-center justify-center">
                <Icon name="Package" size={80} className="text-primary opacity-50" />
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Wrench" size={28} className="text-secondary" />
                Крафт и выживание
              </h3>
              <p className="text-muted-foreground">
                Создавайте оружие, броню и предметы из найденных материалов. Управляйте ресурсами для выживания
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="история" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-glow animate-fade-in-up">История</h2>
          <Card className="p-8 bg-card/50 backdrop-blur border-border">
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              После глобальной катастрофы мир превратился в пустошь. Остатки человечества борются за выживание среди
              руин некогда великой цивилизации.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
              Вы — один из немногих выживших, кто владеет древними знаниями. Ваша миссия — найти источник загадочной
              энергии, которая может возродить мир... или окончательно его уничтожить.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-muted/50 rounded-lg">
                <Icon name="Calendar" size={32} className="text-primary mb-2" />
                <h4 className="font-bold mb-1">2087 год</h4>
                <p className="text-sm text-muted-foreground">Начало катастрофы</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <Icon name="Skull" size={32} className="text-secondary mb-2" />
                <h4 className="font-bold mb-1">95% населения</h4>
                <p className="text-sm text-muted-foreground">Погибло в первые дни</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <Icon name="Map" size={32} className="text-primary mb-2" />
                <h4 className="font-bold mb-1">7 регионов</h4>
                <p className="text-sm text-muted-foreground">Доступны для исследования</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="персонажи" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-glow animate-fade-in-up">Персонажи</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Элара',
                role: 'Скаут',
                description: 'Опытная разведчица, знающая каждый уголок пустоши',
              },
              {
                name: 'Вейн',
                role: 'Механик',
                description: 'Гений технологий, способный чинить любую технику',
              },
              {
                name: 'Кай',
                role: 'Воин',
                description: 'Непревзойдённый боец, защищающий своих товарищей',
              },
            ].map((char, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all group">
                <div
                  className="w-full h-64 mb-4 rounded-lg bg-cover bg-center group-hover:scale-105 transition-transform"
                  style={{
                    backgroundImage: `url('https://cdn.poehali.dev/projects/59315384-570f-4554-b6b2-61fda036b317/files/a39e4c78-4fcf-47c9-813a-2cea02b62aca.jpg')`,
                  }}
                />
                <h3 className="text-2xl font-bold mb-2">{char.name}</h3>
                <p className="text-primary font-medium mb-3">{char.role}</p>
                <p className="text-muted-foreground">{char.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="новости" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-glow animate-fade-in-up">Новости</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="updates">Обновления</TabsTrigger>
              <TabsTrigger value="events">События</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              {[
                {
                  date: '15 октября 2024',
                  title: 'Вышло обновление 2.5',
                  content: 'Добавлены новые локации, персонажи и квесты. Улучшена боевая система.',
                },
                {
                  date: '1 октября 2024',
                  title: 'Хэллоуинское событие',
                  content: 'Специальные задания и уникальные награды до 31 октября.',
                },
                {
                  date: '20 сентября 2024',
                  title: 'Турнир сообщества',
                  content: 'Примите участие в PvP-турнире и выиграйте эксклюзивные предметы.',
                },
              ].map((news, index) => (
                <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-all">
                  <div className="flex items-start gap-4">
                    <Icon name="Newspaper" size={32} className="text-primary flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{news.date}</p>
                      <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                      <p className="text-muted-foreground">{news.content}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="updates">
              <Card className="p-6 bg-card border-border">
                <p className="text-muted-foreground">Обновления игры появятся здесь</p>
              </Card>
            </TabsContent>
            <TabsContent value="events">
              <Card className="p-6 bg-card border-border">
                <p className="text-muted-foreground">События игры появятся здесь</p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="сообщество" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-12 text-glow animate-fade-in-up">Сообщество</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              { icon: 'MessageCircle', name: 'Discord', members: '50K+' },
              { icon: 'Send', name: 'Telegram', members: '25K+' },
              { icon: 'Share2', name: 'VK', members: '40K+' },
              { icon: 'Youtube', name: 'YouTube', members: '15K+' },
            ].map((social, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon name={social.icon as any} size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{social.name}</h3>
                    <p className="text-muted-foreground">{social.members} участников</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="p-8 bg-card/50 backdrop-blur border-border text-center">
            <h3 className="text-2xl font-bold mb-4">Присоединяйтесь к сообществу</h3>
            <p className="text-muted-foreground mb-6">
              Общайтесь с другими игроками, делитесь своими достижениями и находите союзников
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Users" size={20} className="mr-2" />
              Вступить
            </Button>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary text-glow">GloomyPost</h2>
          <p className="text-muted-foreground mb-6">© 2024 GloomyPost. Все права защищены.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Поддержка
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
