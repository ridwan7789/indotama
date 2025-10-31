import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import logs from '@/assets/products/logs.jpg';
import stackedPlywood from '@/assets/products/stacked-plywood.jpg';
import blockboardLayers from '@/assets/products/blockboard-layers.jpg';
import plywoodSheet from '@/assets/products/plywood-sheet.jpg';
import woodSurface1 from '@/assets/products/wood-surface-1.jpg';
import plywoodStack from '@/assets/products/plywood-stack.jpg';
import lvlLayers from '@/assets/products/lvl-layers.jpg';
import woodSurface2 from '@/assets/products/wood-surface-2.jpg';

const GallerySection = () => {
  const { t } = useLanguage();

  const galleryImages = [
    { src: logs, alt: 'Sengon and Albasia logs' },
    { src: stackedPlywood, alt: 'Stacked plywood production' },
    { src: blockboardLayers, alt: 'Blockboard layered structure' },
    { src: plywoodSheet, alt: 'High quality plywood sheet' },
    { src: woodSurface1, alt: 'Natural wood surface texture' },
    { src: plywoodStack, alt: 'Plywood panel stack' },
    { src: lvlLayers, alt: 'LVL laminated veneer layers' },
    { src: woodSurface2, alt: 'Premium wood grain detail' },
  ];

  return (
    <section id="gallery" className="py-20 relative overflow-hidden"
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-wood-black">
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-wood-black">{t('gallery.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-natural hover:shadow-lifted transition-all duration-300 group cursor-pointer wood-card"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
