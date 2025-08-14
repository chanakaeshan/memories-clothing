import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const Shop = () => {
  const products = [
    { id: 1, name: 'Essential Tee', price: 120, category: 'Basics' },
    { id: 2, name: 'Minimal Hoodie', price: 240, category: 'Outerwear' },
    { id: 3, name: 'Tailored Pants', price: 280, category: 'Bottoms' },
    { id: 4, name: 'Classic Coat', price: 520, category: 'Outerwear' },
    { id: 5, name: 'Signature Sweater', price: 320, category: 'Knitwear' },
    { id: 6, name: 'Structured Blazer', price: 480, category: 'Outerwear' },
    { id: 7, name: 'Premium Denim', price: 380, category: 'Bottoms' },
    { id: 8, name: 'Cashmere Scarf', price: 220, category: 'Accessories' },
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="section-padding section-margin">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-extralight tracking-wide mb-4">
                Shop
              </h1>
              <p className="text-muted-foreground font-light tracking-wider">
                Discover our complete collection of essential pieces
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="product-card group aspect-[3/4] bg-card relative overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="product-overlay"></div>
                  <div className="product-info">
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                      {product.category}
                    </p>
                    <h3 className="text-foreground font-light tracking-wider text-sm uppercase">
                      {product.name}
                    </h3>
                    <p className="text-foreground text-sm mt-1 font-light">
                      ${product.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Shop;