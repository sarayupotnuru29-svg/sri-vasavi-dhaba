import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const ContactPage = () => {
  return (
    /* Changed pt-20 to pt-0 to allow the background image to flow under the transparent navbar */
    <div className="min-h-screen pt-0">
      
      {/* Header Section */}
      <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: `url(${contactBg})` }}>
        {/* Dark overlay for better text and logo legibility */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl font-bold text-dhaba-yellow mb-2 drop-shadow-lg"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-dhaba-cream font-body text-lg md:text-xl drop-shadow-md"
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display text-4xl font-bold text-dhaba-dark mb-4">Get In Touch</h2>

            {/* Phone Card */}
            <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-dhaba-warm/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-dhaba-yellow/10 p-3 rounded-xl">
                <Phone size={24} className="text-dhaba-dark" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-1 text-dhaba-dark">Phone</h3>
                <div className="space-y-1">
                  <a href="tel:9390007617" className="block text-muted-foreground hover:text-dhaba-yellow transition-colors font-medium">9390007617</a>
                  <a href="tel:6304516695" className="block text-muted-foreground hover:text-dhaba-yellow transition-colors font-medium">6304516695</a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-dhaba-warm/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-dhaba-yellow/10 p-3 rounded-xl">
                <MapPin size={24} className="text-dhaba-dark" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-1 text-dhaba-dark">Address</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Opp Bharath Petrol Pump,<br />
                  Pileru to Chittoor Highway,<br />
                  Near Dhamalacheruvu
                </p>
              </div>
            </div>

            {/* Service Note Card */}
            <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-dhaba-warm/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-dhaba-yellow/10 p-3 rounded-xl">
                <Clock size={24} className="text-dhaba-dark" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-1 text-dhaba-dark">Service Note</h3>
                <p className="text-muted-foreground font-medium">All Catering Orders Available</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/9390007617"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-green-500 text-white py-4 rounded-2xl font-body font-bold text-lg hover:bg-green-600 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <MessageCircle size={24} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Map / Navigation Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-dhaba-warm/10 h-96 relative">
              <iframe
                title="Sri Vasavi Family Dhaba Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15523.504246946654!2d79.1353!3d13.4243!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI1JzI3LjUiTiA3OcKwMDgnMDcuMSJF!5e0!3m2!1sen!2sin!4v1647200000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="bg-dhaba-dark text-dhaba-cream p-8 rounded-3xl shadow-xl relative overflow-hidden">
               {/* Decorative background element */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-dhaba-yellow/5 rounded-full -mr-16 -mt-16" />
               
              <h3 className="font-display text-2xl font-bold mb-4 text-dhaba-yellow flex items-center gap-2">
                📍 How to Find Us
              </h3>
              <p className="font-body text-base leading-relaxed text-dhaba-cream/80">
                Conveniently located for travelers! We are situated directly opposite the 
                <span className="text-dhaba-yellow font-bold"> Bharath Petrol Pump </span> 
                on the busy Pileru-Chittoor Highway. 
              </p>
              <div className="mt-6 flex items-center gap-3 text-dhaba-yellow text-sm font-bold uppercase tracking-widest">
                <span className="h-px w-8 bg-dhaba-yellow/30" />
                Dhamalacheruvu Branch
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;