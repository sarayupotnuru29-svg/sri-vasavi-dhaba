import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import menuCategories from "@/data/menuData";
import heroBg from "@/assets/hero-bg.jpg";

const CategoriesPage = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="absolute inset-0 bg-dhaba-overlay" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-bold text-dhaba-yellow mb-2"
          >
            Categories
          </motion.h1>
          <p className="text-dhaba-cream/80 font-body text-lg">Browse by your favorite food category</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
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
                className="block bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border group"
              >
                <div className="h-48 overflow-hidden bg-muted">
                  <img
                    src={cat.items[0]?.image || "/placeholder.svg"}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-display text-xl font-bold text-foreground">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cat.items.length} items</p>
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
