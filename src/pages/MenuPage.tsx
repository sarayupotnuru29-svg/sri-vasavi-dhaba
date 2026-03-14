// import { useState } from "react";
// import { motion } from "framer-motion";
// import menuCategories from "@/data/menuData";
// import MenuItemCard from "@/components/MenuItemCard";
// import MandiItemCard from "@/components/MandiItemCard";
// import menuBg from "@/assets/menu-bg.jpg";

// const MenuPage = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredCategories =
//     activeCategory === "all" ? menuCategories : menuCategories.filter((c) => c.id === activeCategory);

//   return (
//     <div className="min-h-screen pt-20">
//       {/* Header */}
//       <section className="relative py-20 bg-cover bg-center" style={{ backgroundImage: `url(${menuBg})` }}>
//         <div className="absolute inset-0 bg-dhaba-overlay" />
//         <div className="relative z-10 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="font-display text-5xl font-bold text-dhaba-yellow mb-2"
//           >
//             Our Menu
//           </motion.h1>
//           <p className="text-dhaba-cream/80 font-body text-lg">Discover the authentic flavors of our dhaba</p>
//         </div>
//       </section>

//       {/* Category Filter */}
//       <div className="sticky top-[73px] z-30 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
//         <div className="container mx-auto px-4 py-3 overflow-x-auto">
//           <div className="flex gap-2 min-w-max">
//             <button
//               onClick={() => setActiveCategory("all")}
//               className={`px-4 py-2 rounded-md text-sm font-semibold font-body transition-colors ${
//                 activeCategory === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
//               }`}
//             >
//               All
//             </button>
//             {menuCategories.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => setActiveCategory(cat.id)}
//                 className={`px-4 py-2 rounded-md text-sm font-semibold font-body transition-colors whitespace-nowrap ${
//                   activeCategory === cat.id
//                     ? "bg-primary text-primary-foreground"
//                     : "bg-muted text-muted-foreground hover:bg-accent"
//                 }`}
//               >
//                 {cat.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Menu Items */}
//       <div className="container mx-auto px-4 py-10">
//         {filteredCategories.map((cat) => (
//           <div key={cat.id} className="mb-12">
//             <h2 className="font-display text-3xl font-bold text-foreground mb-6 border-b-2 border-primary pb-2">
//               {cat.name}
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {/* Regular items */}
//               {cat.items.map((item) => (
//                 <MenuItemCard key={item.id} item={item} />
//               ))}
//               {/* Mandi items with dropdown */}
//               {cat.mandiItems?.map((item) => (
//                 <MandiItemCard key={item.id} item={item} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MenuPage;






import { useState } from "react";
import { motion } from "framer-motion";
import menuCategories from "@/data/menuData";
import MenuItemCard from "@/components/MenuItemCard";
import MandiItemCard from "@/components/MandiItemCard";
import menuBg from "@/assets/menu-bg.jpg";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories =
    activeCategory === "all" ? menuCategories : menuCategories.filter((c) => c.id === activeCategory);

  return (
    /* Changed pt-20 to pt-0 so the background image starts from the very top */
    <div className="min-h-screen pt-0">
      {/* Header */}
      <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: `url(${menuBg})` }}>
        {/* Added a slightly stronger overlay to ensure the logo/nav is readable */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl font-bold text-dhaba-yellow mb-2 drop-shadow-lg"
          >
            Our Menu
          </motion.h1>
          <p className="text-dhaba-cream font-body text-lg md:text-xl drop-shadow-md">
            Discover the authentic flavors of our dhaba
          </p>
        </div>
      </section>

      {/* Category Filter */}
      {/* Adjusted top position to sit lower since we removed top padding */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-dhaba-warm/20 shadow-sm">
        <div className="container mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex gap-3 min-w-max justify-start md:justify-center">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-5 py-2 rounded-full text-sm font-bold font-body transition-all uppercase tracking-tighter ${
                activeCategory === "all" 
                ? "bg-dhaba-yellow text-dhaba-dark" 
                : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              All
            </button>
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-bold font-body transition-all whitespace-nowrap uppercase tracking-tighter ${
                  activeCategory === cat.id
                    ? "bg-dhaba-yellow text-dhaba-dark"
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
      <div className="container mx-auto px-4 py-12">
        {filteredCategories.map((cat) => (
          <div key={cat.id} className="mb-16">
            <div className="flex items-center gap-4 mb-8">
               <h2 className="font-display text-3xl font-bold text-foreground">
                {cat.name}
              </h2>
              <div className="h-[2px] bg-dhaba-yellow/30 flex-grow rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {/* Regular items */}
              {cat.items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
              {/* Mandi items with dropdown */}
              {cat.mandiItems?.map((item) => (
                <MandiItemCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;