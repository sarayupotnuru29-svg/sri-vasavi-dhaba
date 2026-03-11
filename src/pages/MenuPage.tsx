import { useState } from "react";
import { motion } from "framer-motion";
import menuCategories from "@/data/menuData";
import MenuItemCard from "@/components/MenuItemCard";
import menuBg from "@/assets/menu-bg.jpg";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories =
    activeCategory === "all" ? menuCategories : menuCategories.filter((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `url(${menuBg})` }}>
        <div className="absolute inset-0 bg-dhaba-overlay" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-bold text-dhaba-yellow mb-2"
          >
            Our Menu
          </motion.h1>
          <p className="text-dhaba-cream/80 font-body text-lg">Discover the authentic flavors of our dhaba</p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="sticky top-[73px] z-30 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-3 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-md text-sm font-semibold font-body transition-colors ${
                activeCategory === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              All
            </button>
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-md text-sm font-semibold font-body transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="container mx-auto px-4 py-10">
        {filteredCategories.map((cat) => (
          <div key={cat.id} className="mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6 border-b-2 border-primary pb-2">
              {cat.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cat.items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
