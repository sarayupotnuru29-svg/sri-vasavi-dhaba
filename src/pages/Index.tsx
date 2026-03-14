// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ChefHat, Utensils, Phone } from "lucide-react";
// import heroBg from "@/assets/hero-bg.jpg";
// import menuBg from "@/assets/menu-bg.jpg";
// import menuCategories from "@/data/menuData";
// import MenuItemCard from "@/components/MenuItemCard";

// const Index = () => {
//   const featuredItems = menuCategories.slice(0, 3).flatMap((c) => c.items.slice(0, 2));

//   return (
//     <div className="min-h-screen">
//       {/* Hero */}
//       <section
//         className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
//         style={{ backgroundImage: `url(${heroBg})` }}
//       >
//         <div className="absolute inset-0 bg-dhaba-overlay" />
//         <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="font-display text-5xl md:text-7xl font-bold text-dhaba-yellow mb-4 drop-shadow-lg"
//           >
//             Sri Vasavi Family Dhaba
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="text-xl md:text-2xl text-dhaba-cream/90 font-body mb-8"
//           >
//             Authentic Andhra & South Indian Cuisine • Since Generations
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//           >
//             <Link
//               to="/menu"
//               className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-body font-bold text-lg hover:bg-dhaba-yellow hover:text-dhaba-dark transition-colors"
//             >
//               View Full Menu
//             </Link>
//             <Link
//               to="/contact"
//               className="border-2 border-dhaba-yellow text-dhaba-yellow px-8 py-3 rounded-md font-body font-bold text-lg hover:bg-dhaba-yellow hover:text-dhaba-dark transition-colors"
//             >
//               Contact Us
//             </Link>
//           </motion.div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-16 bg-dhaba-cream">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { icon: ChefHat, title: "Authentic Recipes", desc: "Traditional family recipes passed down through generations" },
//               { icon: Utensils, title: "Catering Available", desc: "All catering orders available for your special events" },
//               { icon: Phone, title: "Quick Order", desc: "Call us or order via WhatsApp for fast delivery" },
//             ].map((f, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.15 }}
//                 className="text-center p-8 bg-card rounded-lg shadow-md border border-border"
//               >
//                 <f.icon size={40} className="mx-auto text-primary mb-4" />
//                 <h3 className="font-display text-xl font-bold mb-2">{f.title}</h3>
//                 <p className="text-muted-foreground text-sm">{f.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Items */}
//       <section
//         className="relative py-20 bg-cover bg-center bg-fixed"
//         style={{ backgroundImage: `url(${menuBg})` }}
//       >
//         <div className="absolute inset-0 bg-dhaba-overlay" />
//         <div className="relative z-10 container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="font-display text-4xl font-bold text-dhaba-yellow text-center mb-12"
//           >
//             Our Specialities
//           </motion.h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {featuredItems.map((item) => (
//               <MenuItemCard key={item.id} item={item} />
//             ))}
//           </div>
//           <div className="text-center mt-10">
//             <Link
//               to="/menu"
//               className="inline-block bg-dhaba-yellow text-dhaba-dark px-8 py-3 rounded-md font-body font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
//             >
//               Explore Full Menu →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 bg-primary text-primary-foreground text-center">
//         <div className="container mx-auto px-4">
//           <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">All Catering Orders Available</h2>
//           <p className="font-body text-lg mb-6 opacity-90">Weddings, Parties, Events — We bring the dhaba to you!</p>
//           <a
//             href="tel:9390007617"
//             className="inline-block bg-dhaba-yellow text-dhaba-dark px-8 py-3 rounded-md font-body font-bold text-lg hover:bg-dhaba-cream transition-colors"
//           >
//             Call Now: 9390007617
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Index;






import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChefHat, Utensils, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import menuBg from "@/assets/menu-bg.jpg";
import menuCategories from "@/data/menuData";
import MenuItemCard from "@/components/MenuItemCard";

const Index = () => {
  // Logic to get the first few items for the row
  const featuredItems = menuCategories.slice(0, 3).flatMap((c) => c.items.slice(0, 2)).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-dhaba-overlay" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold text-dhaba-yellow mb-4 drop-shadow-lg"
          >
            Sri Vasavi Family Dhaba
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-dhaba-cream/90 font-body mb-8"
          >
            Authentic Andhra & South Indian Cuisine • Since Generations
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/menu"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-body font-bold text-lg hover:bg-dhaba-yellow hover:text-dhaba-dark transition-colors"
            >
              View Full Menu
            </Link>
            <Link
              to="/contact"
              className="border-2 border-dhaba-yellow text-dhaba-yellow px-8 py-3 rounded-md font-body font-bold text-lg hover:bg-dhaba-yellow hover:text-dhaba-dark transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-dhaba-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ChefHat, title: "Authentic Recipes", desc: "Traditional family recipes passed down through generations" },
              { icon: Utensils, title: "Catering Available", desc: "All catering orders available for your special events" },
              { icon: Phone, title: "Quick Order", desc: "Call us or order via WhatsApp for fast delivery" },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-8 bg-card rounded-lg shadow-md border border-border"
              >
                <f.icon size={40} className="mx-auto text-primary mb-4" />
                <h3 className="font-display text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items - Modified for 4 items in a row */}
      <section
        className="relative py-20 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${menuBg})` }}
      >
        <div className="absolute inset-0 bg-dhaba-overlay" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-dhaba-yellow text-center mb-12"
          >
            Our Specialities
          </motion.h2>
          {/* Changed grid-cols to support 4 items in a row on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-block bg-dhaba-yellow text-dhaba-dark px-8 py-3 rounded-md font-body font-bold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Explore Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">All Catering Orders Available</h2>
          <p className="font-body text-lg mb-6 opacity-90">Weddings, Parties, Events — We bring the dhaba to you!</p>
          <a
            href="tel:9390007617"
            className="inline-block bg-dhaba-yellow text-dhaba-dark px-8 py-3 rounded-md font-body font-bold text-lg hover:bg-dhaba-cream transition-colors"
          >
            Call Now: 9390007617
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;