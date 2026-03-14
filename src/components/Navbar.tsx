// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { ShoppingCart, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import logo from "@/assets/logo.png";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/menu", label: "Menu" },
//   { to: "/categories", label: "Categories" },
//   { to: "/cart", label: "Cart" },
//   { to: "/contact", label: "Contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const { totalItems } = useCart();
//   const location = useLocation();

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-dhaba-dark/95 backdrop-blur-md border-b border-dhaba-warm/30">
//       <div className="container mx-auto flex items-center justify-between py-3 px-4">
//         <Link to="/" className="flex items-center gap-3">
//           <img src={logo} alt="Sri Vasavi Family Dhaba" className="h-14 w-auto object-contain" />
//           <span className="font-display text-xl font-bold text-dhaba-yellow hidden sm:block">
//             Sri Vasavi Family Dhaba
//           </span>
//         </Link>

//         {/* Desktop */}
//         <div className="hidden md:flex items-center gap-8">
//           {navLinks.map((l) => (
//             <Link
//               key={l.to}
//               to={l.to}
//               className={`font-body text-sm font-semibold uppercase tracking-wider transition-colors hover:text-dhaba-yellow ${
//                 location.pathname === l.to ? "text-dhaba-yellow" : "text-dhaba-cream/80"
//               }`}
//             >
//               {l.label}
//               {l.label === "Cart" && totalItems > 0 && (
//                 <span className="ml-1 inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile toggle */}
//         <div className="flex items-center gap-4 md:hidden">
//           <Link to="/cart" className="relative text-dhaba-cream">
//             <ShoppingCart size={22} />
//             {totalItems > 0 && (
//               <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
//                 {totalItems}
//               </span>
//             )}
//           </Link>
//           <button onClick={() => setOpen(!open)} className="text-dhaba-cream">
//             {open ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <div className="md:hidden bg-dhaba-dark/98 border-t border-dhaba-warm/20 pb-4">
//           {navLinks.map((l) => (
//             <Link
//               key={l.to}
//               to={l.to}
//               onClick={() => setOpen(false)}
//               className={`block px-6 py-3 font-body text-sm uppercase tracking-wider transition-colors ${
//                 location.pathname === l.to ? "text-dhaba-yellow bg-dhaba-warm/20" : "text-dhaba-cream/80 hover:text-dhaba-yellow"
//               }`}
//             >
//               {l.label}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;







// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { ShoppingCart, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import logo from "@/assets/logo.png";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/menu", label: "Menu" },
//   { to: "/categories", label: "Categories" },
//   { to: "/cart", label: "Cart" },
//   { to: "/contact", label: "Contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const { totalItems } = useCart();
//   const location = useLocation();

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-dhaba-dark/95 backdrop-blur-md border-b border-dhaba-warm/30">
//       <div className="container mx-auto flex items-center justify-between py-2 px-4">
//         {/* Brand/Logo Section */}
//         <Link to="/" className="flex items-center gap-4">
//           <img 
//             src={logo} 
//             alt="Sri Vasavi Family Dhaba" 
//             className="h-20 w-auto md:h-28 lg:h-32 object-contain transition-all duration-300" 
//             /* Increased from h-14 to h-20/h-28/h-32 */
//           />
//           <span className="font-display text-2xl font-bold text-dhaba-yellow hidden lg:block">
//             Sri Vasavi Family Dhaba
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-8">
//           {navLinks.map((l) => (
//             <Link
//               key={l.to}
//               to={l.to}
//               className={`font-body text-sm font-semibold uppercase tracking-wider transition-colors hover:text-dhaba-yellow ${
//                 location.pathname === l.to ? "text-dhaba-yellow" : "text-dhaba-cream/80"
//               }`}
//             >
//               {l.label}
//               {l.label === "Cart" && totalItems > 0 && (
//                 <span className="ml-1 inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Controls */}
//         <div className="flex items-center gap-4 md:hidden">
//           <Link to="/cart" className="relative text-dhaba-cream">
//             <ShoppingCart size={24} />
//             {totalItems > 0 && (
//               <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
//                 {totalItems}
//               </span>
//             )}
//           </Link>
//           <button 
//             onClick={() => setOpen(!open)} 
//             className="text-dhaba-cream focus:outline-none"
//             aria-label="Toggle Menu"
//           >
//             {open ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {open && (
//         <div className="md:hidden bg-dhaba-dark/98 border-t border-dhaba-warm/20 pb-6 animate-in fade-in slide-in-from-top-4">
//           {navLinks.map((l) => (
//             <Link
//               key={l.to}
//               to={l.to}
//               onClick={() => setOpen(false)}
//               className={`block px-6 py-4 font-body text-base uppercase tracking-wider transition-colors ${
//                 location.pathname === l.to 
//                   ? "text-dhaba-yellow bg-dhaba-warm/10" 
//                   : "text-dhaba-cream/80 hover:text-dhaba-yellow"
//               }`}
//             >
//               {l.label}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;






import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/categories", label: "Categories" },
  { to: "/cart", label: "Cart" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
      {/* py-0 makes the navbar container as slim as possible */}
      <div className="container mx-auto flex items-center justify-between py-0 px-4">
        
        {/* Brand/Logo Section */}
        <Link to="/" className="relative flex items-center gap-4">
          <img 
            src={logo} 
            alt="Sri Vasavi Family Dhaba" 
            /* We keep the large height but use 'absolute' or large margins 
               if needed to let it hang. Here, h-24/32/40 stays big 
               while the navbar height is ignored.
            */
            className="h-24 w-auto md:h-32 lg:h-40 object-contain drop-shadow-2xl" 
          />
          <span className="font-display text-2xl font-bold text-dhaba-yellow hidden lg:block drop-shadow-md">
            Sri Vasavi Family Dhaba
          </span>
        </Link>

        {/* Desktop Navigation - Centered vertically to the slim bar */}
        <div className="hidden md:flex items-center gap-8 h-16"> 
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body text-sm font-semibold uppercase tracking-wider transition-colors hover:text-dhaba-yellow drop-shadow-sm ${
                location.pathname === l.to ? "text-dhaba-yellow" : "text-dhaba-cream/90"
              }`}
            >
              {l.label}
              {l.label === "Cart" && totalItems > 0 && (
                <span className="ml-1 inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden h-16">
          <Link to="/cart" className="relative text-dhaba-cream">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button 
            onClick={() => setOpen(!open)} 
            className="text-dhaba-cream focus:outline-none"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="md:hidden bg-dhaba-dark/98 border-t border-dhaba-warm/20 pb-6 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 font-body text-base uppercase tracking-wider transition-colors ${
                location.pathname === l.to 
                  ? "text-dhaba-yellow bg-dhaba-warm/10" 
                  : "text-dhaba-cream/80 hover:text-dhaba-yellow"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;