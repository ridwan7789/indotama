import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-wood.jpg';
import woodTexture from '@/assets/wood-texture.jpg';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const WoodBox = () => {
  const texture = useLoader(TextureLoader, woodTexture);
  
  return (
    <Box args={[2, 2, 2]} rotation={[0.3, 0.5, 0]}>
      <meshStandardMaterial map={texture} />
    </Box>
  );
};

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background"></div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <WoodBox />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <Button
            onClick={scrollToProducts}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lifted"
          >
            {t('hero.cta')}
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
