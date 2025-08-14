import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="section-padding section-margin">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-extralight tracking-wide mb-4">
                Contact
              </h1>
              <p className="text-muted-foreground font-light tracking-wider">
                We'd love to hear from you. Reach out with any questions or inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div>
                  <h2 className="text-2xl font-extralight tracking-wide mb-6">
                    Get in Touch
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-muted-foreground font-light tracking-wider text-sm uppercase mb-1">
                        Email
                      </p>
                      <p className="text-foreground font-light">
                        chanueshan291@gmail.com
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-light tracking-wider text-sm uppercase mb-1">
                        Phone
                      </p>
                      <p className="text-foreground font-light">
                        +94 71 606 6120
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-light tracking-wider text-sm uppercase mb-1">
                        Address
                      </p>
                      <p className="text-foreground font-light">
                        Katunayake,<br />
                        Sri Lanka.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-extralight tracking-wide mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-6">
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-light tracking-wider text-sm uppercase">
                      Instagram
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-light tracking-wider text-sm uppercase">
                      Twitter
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors font-light tracking-wider text-sm uppercase">
                      Pinterest
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-muted-foreground font-light tracking-wider text-sm uppercase mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-input border border-border px-4 py-3 text-foreground font-light focus:outline-none focus:border-ring transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-muted-foreground font-light tracking-wider text-sm uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-input border border-border px-4 py-3 text-foreground font-light focus:outline-none focus:border-ring transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-muted-foreground font-light tracking-wider text-sm uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-input border border-border px-4 py-3 text-foreground font-light focus:outline-none focus:border-ring transition-colors resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-minimal w-full"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;