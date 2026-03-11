import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { MenuItem } from "@/data/menuData";
import { toast } from "sonner";

const MenuItemCard = ({ item }: { item: MenuItem }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border group"
    >
      <div className="h-48 overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-foreground">{item.name}</h3>
          <span className="font-display text-lg font-bold text-primary whitespace-nowrap">₹{item.price}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
        <button
          onClick={handleAdd}
          className="w-full mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-md font-body font-semibold text-sm hover:bg-dhaba-yellow hover:text-dhaba-dark transition-colors"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default MenuItemCard;
