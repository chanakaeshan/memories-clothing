import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
    {/* 
    <div
      className="min-h-screen text-foreground"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #00263B 80%, #000000 100%)",
      }}
    >
    */}
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="hero-title mb-8">
              Memories
            </h1>
            <p className="hero-subtitle mb-12 max-w-2xl mx-auto">
              Where minimalism meets luxury. Discover clothing that speaks to your refined aesthetic.
            </p>
            <Link
              to="/shop"
              className="btn-minimal inline-block"
            >
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <AnimatedSection className="section-margin section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extralight tracking-wide mb-4">
              Featured Pieces
            </h2>
            <p className="text-muted-foreground font-light tracking-wider">
              Curated selections from our latest collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                className="product-card group aspect-[3/4] bg-card relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94] 
                }}
              >
                <div className="product-overlay"></div>
                <div className="product-info">
                  <h3 className="text-foreground font-light tracking-wider text-sm uppercase">
                    Essential Piece {item}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    $200
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Brand Philosophy */}
      <AnimatedSection className="section-margin section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extralight tracking-wide mb-8">
            Philosophy
          </h2>
          <p className="text-muted-foreground font-light text-lg leading-relaxed tracking-wide">
            We believe in the power of simplicity. Each piece is carefully crafted to embody 
            timeless elegance, focusing on quality over quantity, substance over spectacle.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Index;
