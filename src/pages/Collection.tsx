import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const Collection = () => {
  const collections = [
    {
      id: 1,
      title: 'Autumn Essentials',
      description: 'Carefully curated pieces for the transitional season',
      season: 'AW24',
    },
    {
      id: 2,
      title: 'Minimal Core',
      description: 'Timeless fundamentals that form the foundation of any wardrobe',
      season: 'Timeless',
    },
    {
      id: 3,
      title: 'Urban Refined',
      description: 'Elevated streetwear for the modern individual',
      season: 'SS24',
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="section-padding section-margin">
        <AnimatedSection>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-5xl font-extralight tracking-wide mb-4">
                Collections
              </h1>
              <p className="text-muted-foreground font-light tracking-wider max-w-2xl mx-auto">
                Each collection represents a carefully considered approach to modern dressing, 
                focusing on versatility and enduring style
              </p>
            </div>

            <div className="space-y-24">
              {collections.map((collection, index) => (
                <motion.div
                  key={collection.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                >
                  {/* Image */}
                  <div className={`aspect-[4/5] bg-card ${index % 2 === 1 ? 'order-2' : ''}`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-muted-foreground font-light tracking-wider">
                        Collection {collection.id}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'order-1' : ''}`}>
                    <div className="space-y-2">
                      <p className="text-muted-foreground text-sm font-light tracking-widest uppercase">
                        {collection.season}
                      </p>
                      <h2 className="text-4xl font-extralight tracking-wide">
                        {collection.title}
                      </h2>
                    </div>
                    <p className="text-muted-foreground font-light text-lg leading-relaxed">
                      {collection.description}
                    </p>
                    <button className="btn-minimal">
                      View Collection
                    </button>
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

export default Collection;