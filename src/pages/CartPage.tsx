import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import menuBg from "@/assets/menu-bg.jpg";

const CartPage = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    const message = items
      .map((i) => {
        const optionText = i.option ? ` (${i.option})` : "";
        return `${i.name}${optionText} x${i.quantity} — ₹${i.price * i.quantity}`;
      })
      .join("\n");
    const total = `\n\nTotal: ₹${totalPrice}`;
    const url = `https://wa.me/9390007617?text=${encodeURIComponent("Order from Sri Vasavi Family Dhaba:\n\n" + message + total)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-16 bg-cover bg-center" style={{ backgroundImage: `url(${menuBg})` }}>
        <div className="absolute inset-0 bg-dhaba-overlay" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl font-bold text-dhaba-yellow mb-2"
          >
            Your Cart
          </motion.h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10 max-w-4xl">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart size={60} className="mx-auto text-muted-foreground mb-4" />
            <h2 className="font-display text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add some delicious food to get started!</p>
            <Link
              to="/menu"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-body font-bold hover:bg-dhaba-yellow hover:text-dhaba-dark transition-colors"
            >
              Browse Menu
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-md object-cover bg-muted"
                    onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-lg truncate">{item.name}</h3>
                    {item.option && (
                      <span className="text-xs font-body font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded">
                        {item.option}
                      </span>
                    )}
                    <p className="text-primary font-semibold">₹{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8 rounded-md bg-muted flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="font-body font-bold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8 rounded-md bg-muted flex items-center justify-center hover:bg-accent transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <p className="font-display font-bold text-lg w-20 text-right">₹{item.price * item.quantity}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-destructive hover:text-destructive/80 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-card p-6 rounded-lg border border-border shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-xl font-bold">Total</span>
                <span className="font-display text-2xl font-bold text-primary">₹{totalPrice}</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsAppOrder}
                  className="flex-1 bg-green-600 text-primary-foreground py-3 rounded-md font-body font-bold text-lg hover:bg-green-700 transition-colors"
                >
                  Order on WhatsApp
                </button>
                <button
                  onClick={clearCart}
                  className="px-6 py-3 rounded-md bg-muted text-muted-foreground font-body font-semibold hover:bg-accent transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
