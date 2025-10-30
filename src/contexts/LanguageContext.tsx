import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.products': 'Products',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'PT. Indotama Omicron Kahar',
    'hero.subtitle': 'High Quality Wood Products from Indonesia',
    'hero.cta': 'Explore Our Products',
    
    // About
    'about.title': 'About Us',
    'about.p1': 'PT. Indotama Omicron Kahar is a wood processing manufacturer from Indonesia providing various high-quality products such as Plywood, LVL, Blockboard, Platform, Lamin Board, as well as Sengon and Jabon log and timber.',
    'about.p2': 'All production processes are carried out in our own factory — from veneer peeling, core assembly, to finishing — ensuring consistency and the best quality.',
    'about.p3': 'With more than 20 years of experience, we are committed to:',
    'about.quality': 'Superior product quality',
    'about.delivery': 'On-time delivery',
    'about.price': 'Competitive pricing',
    'about.eco': 'Environmentally friendly production',
    'about.p4': 'We only use wood from sustainable plantations and support the Indonesian SVLK certification system.',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'High-quality wood products for various applications',
    'products.viewSpec': 'View Specifications',
    'products.close': 'Close',
    
    // Green Management
    'green.title': 'Green Management',
    'green.subtitle': 'Commitment to Environmental Sustainability',
    'green.p1': 'We are committed to preserving the environment by using raw materials from legal and sustainable sources.',
    'green.p2': 'All processes follow Indonesian SVLK certification standards to ensure forest sustainability and supply chain transparency.',
    
    // Gallery
    'gallery.title': 'Production Gallery',
    'gallery.subtitle': 'Behind the scenes of our manufacturing process',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch for quotations and inquiries',
    'contact.address': 'Address',
    'contact.addressText': 'JL. GRANTUNG LEGOK, DUKUH REJO, Kabupaten Purworejo, Jawa Tengah - 54152, Indonesia',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.quote': 'Request Quotation',
    
    // Footer
    'footer.tagline': 'Quality Wood Products — Sustainably Made in Indonesia',
    'footer.copyright': 'PT. Indotama Omicron Kahar',
  },
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.about': 'Tentang Kami',
    'nav.products': 'Produk',
    'nav.gallery': 'Galeri',
    'nav.contact': 'Kontak',
    
    // Hero
    'hero.title': 'PT. Indotama Omicron Kahar',
    'hero.subtitle': 'Produk Kayu Berkualitas Tinggi dari Indonesia',
    'hero.cta': 'Jelajahi Produk Kami',
    
    // About
    'about.title': 'Tentang Kami',
    'about.p1': 'PT. Indotama Omicron Kahar adalah produsen kayu olahan dari Indonesia yang menyediakan berbagai produk berkualitas tinggi seperti Plywood, LVL, Blockboard, Platform, Lamin Board, serta log dan balok kayu Sengon dan Jabon.',
    'about.p2': 'Semua proses produksi dilakukan di pabrik kami sendiri — mulai dari pengupasan veneer, penyusunan core, hingga finishing — memastikan konsistensi dan mutu terbaik.',
    'about.p3': 'Dengan pengalaman lebih dari 20 tahun, kami berkomitmen pada:',
    'about.quality': 'Kualitas produk unggulan',
    'about.delivery': 'Pengiriman tepat waktu',
    'about.price': 'Harga kompetitif',
    'about.eco': 'Produksi ramah lingkungan',
    'about.p4': 'Kami menggunakan hanya kayu dari perkebunan berkelanjutan dan mendukung sistem sertifikasi SVLK Indonesia.',
    
    // Products
    'products.title': 'Produk Kami',
    'products.subtitle': 'Produk kayu berkualitas tinggi untuk berbagai aplikasi',
    'products.viewSpec': 'Lihat Spesifikasi',
    'products.close': 'Tutup',
    
    // Green Management
    'green.title': 'Manajemen Hijau',
    'green.subtitle': 'Komitmen terhadap Keberlanjutan Lingkungan',
    'green.p1': 'Kami berkomitmen menjaga kelestarian lingkungan dengan menggunakan bahan baku kayu dari sumber legal dan berkelanjutan.',
    'green.p2': 'Seluruh proses mengikuti standar sertifikasi SVLK Indonesia untuk memastikan keberlanjutan hutan dan transparansi rantai pasok.',
    
    // Gallery
    'gallery.title': 'Galeri Produksi',
    'gallery.subtitle': 'Di balik layar proses manufaktur kami',
    
    // Contact
    'contact.title': 'Hubungi Kami',
    'contact.subtitle': 'Dapatkan penawaran dan informasi lebih lanjut',
    'contact.address': 'Alamat',
    'contact.addressText': 'JL. GRANTUNG LEGOK, DUKUH REJO, Kabupaten Purworejo, Jawa Tengah - 54152, Indonesia',
    'contact.form.name': 'Nama',
    'contact.form.email': 'Email',
    'contact.form.message': 'Pesan',
    'contact.form.send': 'Kirim Pesan',
    'contact.form.quote': 'Minta Penawaran',
    
    // Footer
    'footer.tagline': 'Produk Kayu Berkualitas — Diproduksi Secara Berkelanjutan di Indonesia',
    'footer.copyright': 'PT. Indotama Omicron Kahar',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
