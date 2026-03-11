import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `url(${contactBg})` }}>
        <div className="absolute inset-0 bg-dhaba-overlay" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-bold text-dhaba-yellow mb-2"
          >
            Contact Us
          </motion.h1>
          <p className="text-dhaba-cream/80 font-body text-lg">We'd love to hear from you</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display text-3xl font-bold">Get In Touch</h2>

            <div className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border">
              <Phone size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Phone</h3>
                <a href="tel:9390007617" className="block text-muted-foreground hover:text-primary transition-colors">9390007617</a>
                <a href="tel:6304516695" className="block text-muted-foreground hover:text-primary transition-colors">6304516695</a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border">
              <MapPin size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Address</h3>
                <p className="text-muted-foreground">
                  Opp Bharath Petrol Pump,<br />
                  Pileru to Chittoor Highway,<br />
                  Near Dhamalacheruvu
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-card rounded-lg border border-border">
              <Clock size={24} className="text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Service Note</h3>
                <p className="text-muted-foreground">All Catering Orders Available</p>
              </div>
            </div>

            <a
              href="https://wa.me/9390007617"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 text-primary-foreground py-3 rounded-md font-body font-bold text-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Map / Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-lg overflow-hidden shadow-lg border border-border h-80">
              <iframe
                title="Sri Vasavi Family Dhaba Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.0!2d78.95!3d13.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM5JzAwLjAiTiA3OMKwNTcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="bg-primary text-primary-foreground p-6 rounded-lg">
              <h3 className="font-display text-xl font-bold mb-3">📍 How to Find Us</h3>
              <p className="font-body text-sm leading-relaxed opacity-90">
                Located opposite Bharath Petrol Pump on the Pileru to Chittoor Highway, near Dhamalacheruvu. 
                Look for our signature dhaba setup — you can't miss us!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
