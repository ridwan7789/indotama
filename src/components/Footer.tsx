import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t-2 border-primary/20 py-16"
      style={{
        backgroundImage: `url('/assets/back.png')`,
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
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Company Info */}
          <div className="wood-card p-6 rounded-xl backdrop-blur-sm border border-border/30">
            <h3 className="text-xl font-heading font-bold mb-4 text-primary">
              {t('hero.title')}
            </h3>
            <p className="text-sm text-wood-black">{t('footer.tagline')}</p>
          </div>

          {/* Quick Links */}
          <div className="wood-card p-6 rounded-xl backdrop-blur-sm border border-border/30">
            <h4 className="text-lg font-heading font-semibold mb-4 text-primary">Quick Links</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="block text-sm text-wood-black hover:text-primary transition-colors w-full text-left py-1"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-sm text-wood-black hover:text-primary transition-colors w-full text-left py-1"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="block text-sm text-wood-black hover:text-primary transition-colors w-full text-left py-1"
              >
                {t('nav.products')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-sm text-wood-black hover:text-primary transition-colors w-full text-left py-1"
              >
                {t('nav.contact')}
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div className="wood-card p-6 rounded-xl backdrop-blur-sm border border-border/30">
            <h4 className="text-lg font-heading font-semibold mb-4 text-primary">Contact</h4>
            <div className="space-y-3 text-sm text-wood-black">
              <p>{t('contact.addressText')}</p>
              <p>info@indotamaok.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8 text-center text-sm text-wood-black">
          <p>© {currentYear} {t('footer.copyright')}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
