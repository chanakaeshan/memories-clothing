import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';

const About = () => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="section-padding section-margin">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-5xl font-extralight tracking-wide mb-8">
                About Memories
              </h1>
              <p className="text-xl text-muted-foreground font-light tracking-wider leading-relaxed">
                Founded on the principle that true style transcends trends, 
                Memories represents a return to intentional design and mindful consumption.
              </p>
            </div>

            <div className="space-y-16">
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="aspect-[4/3] bg-card"></div>
                <div className="space-y-6">
                  <h2 className="text-3xl font-extralight tracking-wide">
                    Our Philosophy
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    We believe that clothing should be an extension of one's character, 
                    not a costume. Each piece is designed to integrate seamlessly into 
                    your existing wardrobe, creating endless possibilities for expression 
                    through considered simplicity.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="space-y-6 order-2 lg:order-1">
                  <h2 className="text-3xl font-extralight tracking-wide">
                    Craftsmanship
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Every garment is meticulously crafted using premium materials 
                    sourced from the finest mills around the world. Our commitment 
                    to quality ensures that each piece will remain a cherished part 
                    of your wardrobe for years to come.
                  </p>
                </div>
                <div className="aspect-[4/3] bg-card order-1 lg:order-2"></div>
              </motion.div>

              <AnimatedSection delay={0.6}>
                <div className="text-center space-y-8 py-16">
                  <h2 className="text-3xl font-extralight tracking-wide">
                    Sustainability
                  </h2>
                  <p className="text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
                    We are committed to responsible practices throughout our supply chain. 
                    From ethical sourcing to minimal packaging, every decision is made with 
                    our planet's future in mind. We believe that true luxury lies in 
                    creating pieces that honor both the wearer and the world we share.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;