import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    t('about.quality'),
    t('about.delivery'),
    t('about.price'),
    t('about.eco'),
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-foreground">
            {t('about.title')}
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p className="font-semibold text-foreground">{t('about.p3')}</p>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-natural"
                >
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <p className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg">
              {t('about.p4')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
