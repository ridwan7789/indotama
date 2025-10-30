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
    <footer className="bg-wood-dark text-wood-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">PT. Indotama Omicron Kahar</h3>
            <p className="text-sm opacity-90">{t('footer.tagline')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="block text-sm opacity-90 hover:opacity-100 hover:text-wood-natural transition-colors"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-sm opacity-90 hover:opacity-100 hover:text-wood-natural transition-colors"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="block text-sm opacity-90 hover:opacity-100 hover:text-wood-natural transition-colors"
              >
                {t('nav.products')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-sm opacity-90 hover:opacity-100 hover:text-wood-natural transition-colors"
              >
                {t('nav.contact')}
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>Purworejo, Jawa Tengah</p>
              <p>Indonesia</p>
              <p>info@indotamaok.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-wood-light/20 pt-8 text-center text-sm opacity-75">
          <p>© {currentYear} {t('footer.copyright')}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
