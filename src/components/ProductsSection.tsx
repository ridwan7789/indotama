import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { products, Product } from '@/data/products';
import { productImages } from '@/data/productImages';

const ProductsSection = () => {
  const { language, t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            {t('products.title')}
          </h2>
          <p className="text-lg text-muted-foreground">{t('products.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-card rounded-lg overflow-hidden shadow-natural hover:shadow-lifted transition-all duration-300 h-full flex flex-col">
                <div
                  className="h-48 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${productImages[product.id]})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                  <div className="absolute inset-0 bg-wood-dark/20 group-hover:bg-wood-dark/30 transition-colors"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-4 flex-1">
                    {language === 'en' ? product.nameEn : product.nameId}
                  </h3>
                  <Button
                    onClick={() => setSelectedProduct(product)}
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
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
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading">
              {selectedProduct && (language === 'en' ? selectedProduct.nameEn : selectedProduct.nameId)}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <pre className="whitespace-pre-wrap text-sm text-muted-foreground font-body">
              {selectedProduct && (language === 'en' ? selectedProduct.specificationEn : selectedProduct.specificationId)}
            </pre>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductsSection;
