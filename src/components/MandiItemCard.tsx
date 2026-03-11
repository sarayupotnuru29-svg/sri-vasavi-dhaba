import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import type { MandiItem } from "@/data/menuData";
import { toast } from "sonner";

const MandiItemCard = ({ item }: { item: MandiItem }) => {
  const { addToCart } = useCart();

  const availableOptions = Object.entries(item.pricing)
    .filter(([, price]) => price !== undefined)
    .map(([key, price]) => ({
      label: key.charAt(0).toUpperCase() + key.slice(1),
      price: price as number,
    }));

  const [selectedOption, setSelectedOption] = useState(availableOptions[0]);

  const handleAdd = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: selectedOption.price,
      image: item.image,
      category: item.category,
      description: item.description,
      option: selectedOption.label,
      quantity: 1,
    });
    toast.success(`${item.name} (${selectedOption.label}) added to cart`);
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
        <h3 className="font-display text-lg font-bold text-foreground">{item.name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>

        {/* Size selector */}
        <div className="relative">
          <select
            value={selectedOption.label}
            onChange={(e) => {
              const opt = availableOptions.find((o) => o.label === e.target.value);
              if (opt) setSelectedOption(opt);
            }}
            className="w-full appearance-none bg-muted border border-border rounded-md px-3 py-2 pr-8 font-body text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {availableOptions.map((opt) => (
              <option key={opt.label} value={opt.label}>
                {opt.label} — ₹{opt.price}
              </option>
            ))}
          </select>
          <ChevronDown size={16} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        </div>

        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold text-primary">₹{selectedOption.price}</span>
        </div>

        <button
          onClick={handleAdd}
          className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2.5 rounded-md font-body font-semibold text-sm hover:bg-dhaba-yellow hover:text-dhaba-dark transition-colors"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default MandiItemCard;
