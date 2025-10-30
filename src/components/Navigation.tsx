import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card/95 backdrop-blur-md shadow-natural' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-heading font-bold text-foreground hover:text-primary transition-colors"
          >
            PT. IOK
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('nav.products')}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('nav.gallery')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('nav.contact')}
            </button>
            
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'ID' : 'EN'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              onClick={toggleLanguage}
              variant="ghost"
              size="sm"
              className="gap-2"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'ID' : 'EN'}
            </Button>
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              size="icon"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {t('nav.products')}
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {t('nav.gallery')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {t('nav.contact')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
