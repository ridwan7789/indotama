import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { products, Product } from '@/data/products';
import { productImages } from '@/data/productImages';

const ProductsSection = () => {
  const { language, t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-20 relative overflow-hidden" 
      style={{
        backgroundImage: `url('/src/assets/back.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
      {/* Decorative 3D elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-wood-accent/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground relative inline-block">
            <span className="relative z-10">{t('products.title')}</span>
            <span className="absolute top-0 left-0 text-wood-dark/30 transform translate-x-1 -translate-y-1 -z-10" aria-hidden="true">
              {t('products.title')}
            </span>
          </h2>
          <p className="text-lg text-wood-black">{t('products.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group perspective-1000"
            >
              <div className="relative bg-card/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-natural hover:shadow-2xl transition-all duration-500 h-full flex flex-col transform transition-transform hover:-translate-y-2 border border-border/30 wood-card">
                <div
                  className="h-48 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${productImages[product.id]})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-80"></div>
                  <div className="absolute inset-0 bg-wood-dark/20 group-hover:bg-wood-dark/30 transition-colors"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-4 flex-1 transform transition-transform group-hover:scale-105">
                    {language === 'en' ? product.nameEn : product.nameId}
                  </h3>
                  <Button
                    onClick={() => setSelectedProduct(product)}
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all border-2 py-6 text-base"
                  >
                    {t('products.viewSpec')}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Specification Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto wood-card backdrop-blur-lg border-2 border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading text-primary relative">
              <span className="relative z-10">{selectedProduct && (language === 'en' ? selectedProduct.nameEn : selectedProduct.nameId)}</span>
              <span className="absolute top-0 left-0 text-wood-dark/20 transform translate-x-1 -translate-y-1 -z-10" aria-hidden="true">
                {selectedProduct && (language === 'en' ? selectedProduct.nameEn : selectedProduct.nameId)}
              </span>
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 bg-card/50 p-4 rounded-lg border border-border/30 backdrop-blur-sm">
            <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-body leading-relaxed">
              {selectedProduct && (language === 'en' ? selectedProduct.specificationEn : selectedProduct.specificationId)}
            </pre>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductsSection;
