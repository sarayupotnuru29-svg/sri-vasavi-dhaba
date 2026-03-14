// import { motion } from "framer-motion";
// import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { Link } from "react-router-dom";
// import menuBg from "@/assets/menu-bg.jpg";

// const CartPage = () => {
//   const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

//   const handleWhatsAppOrder = () => {
//     const message = items
//       .map((i) => {
//         const optionText = i.option ? ` (${i.option})` : "";
//         return `${i.name}${optionText} x${i.quantity} — ₹${i.price * i.quantity}`;
//       })
//       .join("\n");
//     const total = `\n\nTotal: ₹${totalPrice}`;
//     const url = `https://wa.me/9390007617?text=${encodeURIComponent("Order from Sri Vasavi Family Dhaba:\n\n" + message + total)}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="min-h-screen pt-20">
//       <section className="relative py-16 bg-cover bg-center" style={{ backgroundImage: `url(${menuBg})` }}>
//         <div className="absolute inset-0 bg-dhaba-overlay" />
//         <div className="relative z-10 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="font-display text-5xl font-bold text-dhaba-yellow mb-2"
//           >
//             Your Cart
//           </motion.h1>
//         </div>
//       </section>

//       <div className="container mx-auto px-4 py-10 max-w-4xl">
//         {items.length === 0 ? (
//           <div className="text-center py-20">
//             <ShoppingCart size={60} className="mx-auto text-muted-foreground mb-4" />
//             <h2 className="font-display text-2xl font-bold mb-2">Your cart is empty</h2>
//             <p className="text-muted-foreground mb-6">Add some delicious food to get started!</p>
//             <Link
//               to="/menu"
//               className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-body font-bold hover:bg-dhaba-yellow hover:text-dhaba-dark transition-colors"
//             >
//               Browse Menu
//             </Link>
//           </div>
//         ) : (
//           <>
//             <div className="space-y-4">
//               {items.map((item) => (
//                 <motion.div
//                   key={item.id}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border shadow-sm"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-20 h-20 rounded-md object-cover bg-muted"
//                     onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
//                   />
//                   <div className="flex-1 min-w-0">
//                     <h3 className="font-display font-bold text-lg truncate">{item.name}</h3>
//                     {item.option && (
//                       <span className="text-xs font-body font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded">
//                         {item.option}
//                       </span>
//                     )}
//                     <p className="text-primary font-semibold">₹{item.price}</p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       className="h-8 w-8 rounded-md bg-muted flex items-center justify-center hover:bg-accent transition-colors"
//                     >
//                       <Minus size={14} />
//                     </button>
//                     <span className="font-body font-bold w-8 text-center">{item.quantity}</span>
//                     <button
//                       onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       className="h-8 w-8 rounded-md bg-muted flex items-center justify-center hover:bg-accent transition-colors"
//                     >
//                       <Plus size={14} />
//                     </button>
//                   </div>
//                   <p className="font-display font-bold text-lg w-20 text-right">₹{item.price * item.quantity}</p>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="text-destructive hover:text-destructive/80 transition-colors"
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="mt-8 bg-card p-6 rounded-lg border border-border shadow-sm">
//               <div className="flex items-center justify-between mb-4">
//                 <span className="font-display text-xl font-bold">Total</span>
//                 <span className="font-display text-2xl font-bold text-primary">₹{totalPrice}</span>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <button
//                   onClick={handleWhatsAppOrder}
//                   className="flex-1 bg-green-600 text-primary-foreground py-3 rounded-md font-body font-bold text-lg hover:bg-green-700 transition-colors"
//                 >
//                   Order on WhatsApp
//                 </button>
//                 <button
//                   onClick={clearCart}
//                   className="px-6 py-3 rounded-md bg-muted text-muted-foreground font-body font-semibold hover:bg-accent transition-colors"
//                 >
//                   Clear Cart
//                 </button>
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;







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
    /* Changed pt-20 to pt-0 to remove the white gap at the top */
    <div className="min-h-screen pt-0">
      
      {/* Header Section */}
      <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: `url(${menuBg})` }}>
        {/* Semi-transparent overlay for text legibility against the background */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-6xl font-bold text-dhaba-yellow mb-2 drop-shadow-lg"
          >
            Your Cart
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-dhaba-cream font-body text-lg drop-shadow-md"
          >
            Review your selection before ordering
          </motion.p>
        </div>
      </section>

      {/* Cart Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <ShoppingCart size={80} className="mx-auto text-dhaba-warm/30 mb-6" />
              <h2 className="font-display text-3xl font-bold mb-3 text-dhaba-dark">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8 text-lg">Looks like you haven't added any delicious food yet!</p>
              <Link
                to="/menu"
                className="inline-block bg-dhaba-yellow text-dhaba-dark px-10 py-4 rounded-full font-body font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Browse Menu
              </Link>
            </motion.div>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex flex-col sm:flex-row items-center gap-4 bg-white p-5 rounded-2xl border border-dhaba-warm/10 shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-xl object-cover bg-muted"
                    onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                  />
                  
                  <div className="flex-1 text-center sm:text-left min-w-0">
                    <h3 className="font-display font-bold text-xl text-dhaba-dark truncate">{item.name}</h3>
                    {item.option && (
                      <span className="inline-block mt-1 text-xs font-bold bg-dhaba-yellow/20 text-dhaba-dark px-3 py-1 rounded-full uppercase tracking-widest">
                        {item.option}
                      </span>
                    )}
                    <p className="text-dhaba-yellow font-bold text-lg mt-1">₹{item.price}</p>
                  </div>

                  <div className="flex items-center gap-4 bg-dhaba-dark/5 p-1 rounded-full px-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-8 w-8 rounded-full bg-white text-dhaba-dark flex items-center justify-center hover:bg-dhaba-yellow transition-colors shadow-sm"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-body font-bold w-6 text-center text-lg">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-8 w-8 rounded-full bg-white text-dhaba-dark flex items-center justify-center hover:bg-dhaba-yellow transition-colors shadow-sm"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="text-right min-w-[100px]">
                    <p className="font-display font-black text-xl text-dhaba-dark">₹{item.price * item.quantity}</p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="mt-10 bg-dhaba-dark text-dhaba-cream p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-dhaba-yellow/10 rounded-full -mr-16 -mt-16" />
              
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="font-body text-dhaba-cream/60 uppercase tracking-widest text-sm">Grand Total</span>
                  <h2 className="font-display text-4xl font-bold text-dhaba-yellow mt-1">₹{totalPrice}</h2>
                </div>
                <ShoppingCart size={40} className="text-dhaba-yellow/20" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppOrder}
                  className="flex-1 bg-green-500 text-white py-4 rounded-2xl font-body font-bold text-lg hover:bg-green-600 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
                >
                  Order on WhatsApp
                </button>
                <button
                  onClick={clearCart}
                  className="px-8 py-4 rounded-2xl bg-white/10 text-dhaba-cream font-body font-semibold hover:bg-white/20 transition-all"
                >
                  Clear Cart
                </button>
              </div>
              <p className="text-center text-xs text-dhaba-cream/40 mt-6 italic">
                * Prices are exclusive of any delivery charges.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;