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
    <section id="about" className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('/src/assets/back.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
      {/* Decorative 3D elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-wood-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-wood-black">
            {t('about.title')}
          </h2>

          <div className="space-y-6 text-lg text-wood-black">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p className="font-semibold text-wood-black">{t('about.p3')}</p>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg shadow-natural border border-border/30"
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-wood-black font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <p className="bg-card/80 backdrop-blur-sm border-l-4 border-primary p-4 rounded-r-lg border border-border/30">
              <span className="text-wood-black">{t('about.p4')}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
