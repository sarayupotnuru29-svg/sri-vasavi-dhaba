// import { Link } from "react-router-dom";
// import { Phone, MapPin } from "lucide-react";
// import logo from "@/assets/logo.png";

// const Footer = () => (
//   <footer className="bg-dhaba-dark text-dhaba-cream/80">
//     <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
//       {/* Brand - Increased Logo Size */}
//       <div className="space-y-6">
//         <div className="flex flex-col items-start gap-4">
//           <img 
//             src={logo} 
//             alt="Sri Vasavi Family Dhaba Logo" 
//             className="h-24 md:h-32 w-auto object-contain drop-shadow-md" 
//             /* Increased from h-14 to h-24/h-32 */
//           />
//           <span className="font-display text-xl font-bold text-dhaba-yellow leading-tight">
//             Sri Vasavi Family Dhaba
//           </span>
//         </div>
//         <p className="text-sm leading-relaxed max-w-xs">
//           Authentic South Indian & Andhra cuisine with the warmth of a family dhaba. 
//           Experience the true flavors of the highway.
//         </p>
//         <div className="inline-block px-3 py-1 border border-dhaba-yellow/30 rounded-full">
//           <p className="text-dhaba-yellow font-semibold text-xs">🍽️ All Catering Orders Available</p>
//         </div>
//       </div>

//       {/* Quick Links */}
//       <div>
//         <h4 className="font-display text-dhaba-yellow mb-6 text-lg uppercase tracking-wider">Quick Links</h4>
//         <ul className="space-y-3 text-sm">
//           {["/", "/menu", "/categories", "/cart", "/contact"].map((path) => (
//             <li key={path}>
//               <Link to={path} className="hover:text-dhaba-yellow transition-colors capitalize flex items-center gap-2">
//                 <span className="h-px w-2 bg-dhaba-warm/30"></span>
//                 {path === "/" ? "Home" : path.slice(1)}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Categories */}
//       <div>
//         <h4 className="font-display text-dhaba-yellow mb-6 text-lg uppercase tracking-wider">Categories</h4>
//         <ul className="space-y-3 text-sm">
//           {["Dhaba Special", "Tiffins", "Biryani & Rice", "Mandis", "BBQ & Night"].map((c) => (
//             <li key={c}>
//               <Link to="/categories" className="hover:text-dhaba-yellow transition-colors flex items-center gap-2">
//                 <span className="h-px w-2 bg-dhaba-warm/30"></span>
//                 {c}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Contact */}
//       <div>
//         <h4 className="font-display text-dhaba-yellow mb-6 text-lg uppercase tracking-wider">Contact Us</h4>
//         <div className="space-y-4 text-sm">
//           <div className="flex items-start gap-3">
//             <Phone size={18} className="mt-0.5 text-dhaba-yellow shrink-0" />
//             <div className="space-y-1">
//               <a href="tel:9390007617" className="hover:text-dhaba-yellow block transition-colors">9390007617</a>
//               <a href="tel:6304516695" className="hover:text-dhaba-yellow block transition-colors">6304516695</a>
//             </div>
//           </div>
//           <div className="flex items-start gap-3">
//             <MapPin size={18} className="mt-0.5 text-dhaba-yellow shrink-0" />
//             <p className="leading-relaxed">
//               Opp Bharath Petrol Pump,<br />
//               Pileru to Chittoor Highway,<br />
//               Near Dhamalacheruvu
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Bottom Bar */}
//     <div className="border-t border-dhaba-warm/10 bg-black/20">
//       <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-dhaba-cream/40">
//         <p>© {new Date().getFullYear()} Sri Vasavi Family Dhaba. All rights reserved.</p>
//         <p className="italic">Designed for the love of authentic flavors</p>
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;








import { Link } from "react-router-dom";
import { Phone, MapPin, Heart } from "lucide-react"; // Added Heart icon
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-dhaba-dark text-dhaba-cream/80">
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
      {/* Brand - Increased Logo Size */}
      <div className="space-y-6">
        <div className="flex flex-col items-start gap-4">
          <img 
            src={logo} 
            alt="Sri Vasavi Family Dhaba Logo" 
            className="h-24 md:h-32 w-auto object-contain drop-shadow-md" 
          />
          <span className="font-display text-xl font-bold text-dhaba-yellow leading-tight">
            Sri Vasavi Family Dhaba
          </span>
        </div>
        <p className="text-sm leading-relaxed max-w-xs">
          Authentic South Indian & Andhra cuisine with the warmth of a family dhaba. 
          Experience the true flavors of the highway.
        </p>
        <div className="inline-block px-3 py-1 border border-dhaba-yellow/30 rounded-full">
          <p className="text-dhaba-yellow font-semibold text-xs">🍽️ All Catering Orders Available</p>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-display text-dhaba-yellow mb-6 text-lg uppercase tracking-wider">Quick Links</h4>
        <ul className="space-y-3 text-sm">
          {["/", "/menu", "/categories", "/cart", "/contact"].map((path) => (
            <li key={path}>
              <Link to={path} className="hover:text-dhaba-yellow transition-colors capitalize flex items-center gap-2">
                <span className="h-px w-2 bg-dhaba-warm/30"></span>
                {path === "/" ? "Home" : path.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div>
        <h4 className="font-display text-dhaba-yellow mb-6 text-lg uppercase tracking-wider">Categories</h4>
        <ul className="space-y-3 text-sm">
          {["Dhaba Special", "Tiffins", "Biryani & Rice", "Mandis", "BBQ & Night"].map((c) => (
            <li key={c}>
              <Link to="/categories" className="hover:text-dhaba-yellow transition-colors flex items-center gap-2">
                <span className="h-px w-2 bg-dhaba-warm/30"></span>
                {c}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-display text-dhaba-yellow mb-6 text-lg uppercase tracking-wider">Contact Us</h4>
        <div className="space-y-4 text-sm">
          <div className="flex items-start gap-3">
            <Phone size={18} className="mt-0.5 text-dhaba-yellow shrink-0" />
            <div className="space-y-1">
              <a href="tel:9390007617" className="hover:text-dhaba-yellow block transition-colors">9390007617</a>
              <a href="tel:6304516695" className="hover:text-dhaba-yellow block transition-colors">6304516695</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-0.5 text-dhaba-yellow shrink-0" />
            <p className="leading-relaxed">
              Opp Bharath Petrol Pump,<br />
              Pileru to Chittoor Highway,<br />
              Near Dhamalacheruvu
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-dhaba-warm/10 bg-black/20">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-dhaba-cream/40">
        <p>© {new Date().getFullYear()} Sri Vasavi Family Dhaba. All rights reserved.</p>
        
        {/* Made with Love Section */}
        <div className="flex justify-center items-center gap-1">
          Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
          <a
            href="https://staffarc.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-dhaba-yellow hover:underline"
          >
            <img
              src="/staffarclogo.jpg"
              alt="StaffArc logo"
              className="h-5 w-5 object-contain rounded-sm"
            />
            StaffArc
          </a>
        </div>

        <p className="italic">Designed for the love of authentic flavors</p>
      </div>
    </div>
  </footer>
);

export default Footer;