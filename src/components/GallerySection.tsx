import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import woodTexture from '@/assets/wood-texture.jpg';
import heroImage from '@/assets/hero-wood.jpg';

const GallerySection = () => {
  const { t } = useLanguage();

  const galleryImages = [
    { src: heroImage, alt: 'Plywood manufacturing' },
    { src: woodTexture, alt: 'Wood texture detail' },
    { src: heroImage, alt: 'Production facility' },
    { src: woodTexture, alt: 'Veneer quality' },
    { src: heroImage, alt: 'Stacked products' },
    { src: woodTexture, alt: 'Wood processing' },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            {t('gallery.title')}
          </h2>
          <p className="text-lg text-muted-foreground">{t('gallery.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-natural hover:shadow-lifted transition-all duration-300 group cursor-pointer"
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
