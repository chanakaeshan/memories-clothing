import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-border/20">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16"
          >
            {/* Brand */}
            <div className="md:col-span-2">
              <Link to="/" className="text-2xl font-extralight tracking-widest mb-6 block">
                MEMORIES
              </Link>
              <p className="text-muted-foreground font-light text-sm leading-relaxed max-w-md">
                Where minimalism meets luxury. Discover clothing that speaks to your refined aesthetic.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-foreground font-light tracking-wider text-sm uppercase mb-6">
                Navigate
              </h3>
              <nav className="space-y-4">
                {[
                  { name: 'Shop', path: '/shop' },
                  { name: 'Collection', path: '/collection' },
                  { name: 'About', path: '/about' },
                  { name: 'Contact', path: '/contact' },
                ].map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-muted-foreground font-light text-sm tracking-wide hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-foreground font-light tracking-wider text-sm uppercase mb-6">
                Connect
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground font-light text-sm tracking-wide">
                  chanueshan291@gmail.com
                </p>
                <p className="text-muted-foreground font-light text-sm tracking-wide">
                  +94 71 606 6120
                </p>
                <div className="flex space-x-4 pt-2">
                  {['Instagram', 'Twitter', 'Pinterest'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-muted-foreground font-light text-xs tracking-widest uppercase hover:text-foreground transition-colors duration-300"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-t border-border/20 py-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-muted-foreground font-light text-xs tracking-wider">
                © 2024 MEMORIES. All rights reserved.
              </p>
              <div className="flex space-x-8">
                <a
                  href="#"
                  className="text-muted-foreground font-light text-xs tracking-widest uppercase hover:text-foreground transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-muted-foreground font-light text-xs tracking-widest uppercase hover:text-foreground transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;