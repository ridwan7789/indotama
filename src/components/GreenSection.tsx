import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import greenBg from '@/assets/green-bg.jpg';

const GreenSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${greenBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-accent/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="bg-accent-foreground/10 p-4 rounded-full">
              <Leaf className="h-12 w-12 text-accent-foreground" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-accent-foreground">
            {t('green.title')}
          </h2>
          <p className="text-xl text-accent-foreground/90 mb-8">
            {t('green.subtitle')}
          </p>

          <div className="space-y-6 text-lg text-accent-foreground/90">
            <p className="bg-accent-foreground/10 backdrop-blur-sm p-6 rounded-lg">
              {t('green.p1')}
            </p>
            <p className="bg-accent-foreground/10 backdrop-blur-sm p-6 rounded-lg">
              {t('green.p2')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GreenSection;
