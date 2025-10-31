import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with indo.jpg */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/assets/indo.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="wood-card p-8 rounded-xl max-w-4xl mx-auto backdrop-blur-sm"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary mb-6">
            <span className="block transform transition-transform hover:scale-105">
              {t('hero.title')}
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-wood-black mb-10 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lifted px-8 py-6 text-lg"
            >
              {t('hero.cta')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToProducts}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            >
              View Products
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-wood-dark" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
