// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import menuCategories from "@/data/menuData";
// import heroBg from "@/assets/hero-bg.jpg";

// const CategoriesPage = () => {
//   return (
//     <div className="min-h-screen pt-20">
//       <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
//         <div className="absolute inset-0 bg-dhaba-overlay" />
//         <div className="relative z-10 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="font-display text-5xl font-bold text-dhaba-yellow mb-2"
//           >
//             Categories
//           </motion.h1>
//           <p className="text-dhaba-cream/80 font-body text-lg">Browse by your favorite food category</p>
//         </div>
//       </section>

//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {menuCategories.map((cat, i) => (
//             <motion.div
//               key={cat.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//             >
//               <Link
//                 to={`/menu?category=${cat.id}`}
//                 className="block bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border group"
//               >
//                 <div className="h-48 overflow-hidden bg-muted">
//                   <img
//                     src={cat.items[0]?.image || cat.mandiItems?.[0]?.image || "/placeholder.svg"}
//                     alt={cat.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
//                   />
//                 </div>
//                 <div className="p-5 text-center">
//                   <h3 className="font-display text-xl font-bold text-foreground">{cat.name}</h3>
//                   <p className="text-sm text-muted-foreground mt-1">{cat.items.length + (cat.mandiItems?.length || 0)} items</p>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoriesPage;







import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import menuCategories from "@/data/menuData";
import heroBg from "@/assets/hero-bg.jpg";

const CategoriesPage = () => {
  return (
    /* Changed pt-20 to pt-0 to allow the background image to flow under the transparent navbar */
    <div className="min-h-screen pt-0">
      
      {/* Header Section */}
      <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
        {/* Semi-transparent overlay for better text and logo legibility */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl font-bold text-dhaba-yellow mb-2 drop-shadow-lg"
          >
            Categories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-dhaba-cream font-body text-lg md:text-xl drop-shadow-md"
          >
            Browse by your favorite food category
          </motion.p>
        </div>
      </section>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/menu?category=${cat.id}`}
                className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-dhaba-warm/10 group"
              >
                {/* Image Container */}
                <div className="h-56 overflow-hidden bg-dhaba-dark/5 relative">
                  <img
                    src={cat.items[0]?.image || cat.mandiItems?.[0]?.image || "/placeholder.svg"}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-dhaba-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="font-display text-2xl font-bold text-dhaba-dark group-hover:text-dhaba-yellow transition-colors">
                    {cat.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="h-px w-4 bg-dhaba-yellow" />
                    <p className="text-sm font-semibold text-dhaba-dark/50 uppercase tracking-widest">
                      {cat.items.length + (cat.mandiItems?.length || 0)} items
                    </p>
                    <span className="h-px w-4 bg-dhaba-yellow" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;