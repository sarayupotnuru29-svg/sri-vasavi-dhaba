import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-dhaba-dark text-dhaba-cream/80">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Brand */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
          <span className="font-display text-lg font-bold text-dhaba-yellow">Sri Vasavi Family Dhaba</span>
        </div>
        <p className="text-sm leading-relaxed">Authentic South Indian & Andhra cuisine with the warmth of a family dhaba.</p>
        <p className="text-dhaba-yellow font-semibold text-sm">🍽️ All Catering Orders Available</p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-display text-dhaba-yellow mb-4 text-lg">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          {["/", "/menu", "/categories", "/cart", "/contact"].map((path) => (
            <li key={path}>
              <Link to={path} className="hover:text-dhaba-yellow transition-colors capitalize">
                {path === "/" ? "Home" : path.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div>
        <h4 className="font-display text-dhaba-yellow mb-4 text-lg">Categories</h4>
        <ul className="space-y-2 text-sm">
          {["Dhaba Special", "Tiffins", "Biryani & Rice", "Mandis", "BBQ & Night"].map((c) => (
            <li key={c}>
              <Link to="/categories" className="hover:text-dhaba-yellow transition-colors">{c}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-display text-dhaba-yellow mb-4 text-lg">Contact Us</h4>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <Phone size={16} className="mt-0.5 text-dhaba-yellow shrink-0" />
            <div>
              <a href="tel:9390007617" className="hover:text-dhaba-yellow block">9390007617</a>
              <a href="tel:6304516695" className="hover:text-dhaba-yellow block">6304516695</a>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 text-dhaba-yellow shrink-0" />
            <p>Opp Bharath Petrol Pump,<br />Pileru to Chittoor Highway,<br />Near Dhamalacheruvu</p>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-dhaba-warm/20 text-center py-4 text-xs text-dhaba-cream/50">
      © {new Date().getFullYear()} Sri Vasavi Family Dhaba. All rights reserved.
    </div>
  </footer>
);

export default Footer;
