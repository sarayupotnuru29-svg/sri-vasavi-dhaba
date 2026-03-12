import imgDhabaSpecial from "@/assets/menu/dhaba-special.jpg";
import imgTiffins from "@/assets/menu/tiffins.jpg";
import imgMandis from "@/assets/menu/mandis.jpg";
import imgSoups from "@/assets/menu/soups.jpg";
import imgVegStarters from "@/assets/menu/veg-starters.jpg";
import imgNonvegStarters from "@/assets/menu/nonveg-starters.jpg";
import imgBiryani from "@/assets/menu/biryani.jpg";
import imgRice from "@/assets/menu/rice.jpg";
import imgFish from "@/assets/menu/fish.jpg";
import imgTandoori from "@/assets/menu/tandoori.jpg";
import imgRotis from "@/assets/menu/rotis.jpg";
import imgSeafood from "@/assets/menu/seafood.jpg";
import imgMutton from "@/assets/menu/mutton.jpg";
import imgBbq from "@/assets/menu/bbq.jpg";
import imgNight from "@/assets/menu/night.jpg";
import imgPickles from "@/assets/menu/pickles.jpg";
import imgJuices from "@/assets/menu/juices.jpg";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface MandiPricing {
  single?: number;
  half?: number;
  full?: number;
}

export interface MandiItem {
  id: string;
  name: string;
  pricing: MandiPricing;
  description: string;
  image: string;
  category: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  items: MenuItem[];
  mandiItems?: MandiItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: "dhaba-special",
    name: "Dhaba Special",
    slug: "dhaba-special",
    items: [
      { id: "ds-1", name: "Ragi Mudda", price: 20, description: "Traditional ragi mudda served with spicy curry", image: imgDhabaSpecial, category: "Dhaba Special" },
      { id: "ds-2", name: "Chepala Pulusu", price: 120, description: "Authentic Andhra fish curry with tamarind", image: imgDhabaSpecial, category: "Dhaba Special" },
      { id: "ds-3", name: "Korameenu Pulusu", price: 200, description: "Premium murrel fish cooked in tangy gravy", image: imgDhabaSpecial, category: "Dhaba Special" },
      { id: "ds-4", name: "Natukodi Pulusu", price: 250, description: "Country chicken in spicy home-style gravy", image: imgDhabaSpecial, category: "Dhaba Special" },
      { id: "ds-5", name: "Mutton Talakura", price: 250, description: "Spicy mutton head curry, a dhaba delicacy", image: imgDhabaSpecial, category: "Dhaba Special" },
      { id: "ds-6", name: "Boti Kura", price: 250, description: "Tender mutton boti in rich masala gravy", image: imgDhabaSpecial, category: "Dhaba Special" },
    ],
  },
  {
    id: "tiffins",
    name: "Tiffins",
    slug: "tiffins",
    items: [
      { id: "tf-1", name: "Idly (3+1)", price: 40, description: "Soft steamed rice cakes with chutney & sambar", image: imgTiffins, category: "Tiffins" },
      { id: "tf-2", name: "Thatte Idly", price: 50, description: "Large plate-style idly, soft and fluffy", image: imgTiffins, category: "Tiffins" },
      { id: "tf-3", name: "Ghee Idly Podi", price: 60, description: "Idly drizzled with ghee and spice powder", image: imgTiffins, category: "Tiffins" },
      { id: "tf-4", name: "Sambar Idly", price: 60, description: "Idly soaked in flavorful lentil sambar", image: imgTiffins, category: "Tiffins" },
      { id: "tf-5", name: "Plain Dosa", price: 30, description: "Crispy golden dosa with chutneys", image: imgTiffins, category: "Tiffins" },
      { id: "tf-6", name: "Karam Dosa", price: 40, description: "Dosa spread with spicy red chilli paste", image: imgTiffins, category: "Tiffins" },
      { id: "tf-7", name: "Masala Dosa", price: 50, description: "Dosa filled with spiced potato masala", image: imgTiffins, category: "Tiffins" },
      { id: "tf-8", name: "Onion Dosa", price: 50, description: "Dosa topped with crispy onion bits", image: imgTiffins, category: "Tiffins" },
      { id: "tf-9", name: "Egg Dosa", price: 50, description: "Dosa topped with a spread of egg", image: imgTiffins, category: "Tiffins" },
      { id: "tf-10", name: "Poori", price: 50, description: "Deep fried puffy bread with curry", image: imgTiffins, category: "Tiffins" },
      { id: "tf-11", name: "Pongal", price: 50, description: "Comforting rice and lentil dish with ghee", image: imgTiffins, category: "Tiffins" },
      { id: "tf-12", name: "Upma", price: 50, description: "Savory semolina breakfast dish", image: imgTiffins, category: "Tiffins" },
      { id: "tf-13", name: "Lemon Rice", price: 70, description: "Tangy lemon flavored rice with peanuts", image: imgTiffins, category: "Tiffins" },
    ],
  },
  {
    id: "mandis",
    name: "Non Veg Mandis",
    slug: "mandis",
    items: [],
    mandiItems: [
      { id: "md-1", name: "Nawaabe Chicken Mandi (Spl)", pricing: { single: 309, half: 549, full: 929 }, description: "Royal style chicken mandi with aromatic rice", image: imgMandis, category: "Non Veg Mandis" },
      { id: "md-2", name: "Grilled Chicken Mandi", pricing: { single: 299, half: 529, full: 899 }, description: "Grilled chicken served on fragrant mandi rice", image: imgMandis, category: "Non Veg Mandis" },
      { id: "md-3", name: "B.B.Q Chicken Mandi", pricing: { single: 299, half: 529, full: 899 }, description: "BBQ chicken with smoky mandi rice", image: imgMandis, category: "Non Veg Mandis" },
      { id: "md-4", name: "Al-Faham Chicken Mandi", pricing: { single: 299, half: 529, full: 899 }, description: "Al-Faham style grilled chicken mandi", image: imgMandis, category: "Non Veg Mandis" },
      { id: "md-5", name: "Tandoori Chicken Mandi", pricing: { single: 299, half: 529, full: 899 }, description: "Tandoori chicken on fragrant mandi rice", image: imgMandis, category: "Non Veg Mandis" },
      { id: "md-6", name: "Natukodi Chicken Mandi", pricing: { single: 319, half: 599, full: 999 }, description: "Country chicken mandi with authentic spices", image: imgMandis, category: "Non Veg Mandis" },
      { id: "md-7", name: "Chicken Steak Mandi (B/L)", pricing: { single: 309, half: 559, full: 929 }, description: "Tender chicken steak on a bed of mandi rice", image: imgMandis, category: "Non Veg Mandis" },
      { id: "md-8", name: "Arabic Mutton Juicy Mandi", pricing: { half: 599, full: 999 }, description: "Slow-cooked juicy mutton in Arabic mandi style", image: imgMandis, category: "Non Veg Mandis" },
      { id: "md-9", name: "Arabic Mutton Fry Mandi", pricing: { half: 599, full: 999 }, description: "Fried mutton in Arabic mandi style", image: imgMandis, category: "Non Veg Mandis" },
      { id: "md-10", name: "Grill Fish Mandi (Spl)", pricing: { single: 569, full: 999 }, description: "Grilled fish with fragrant mandi rice", image: imgMandis, category: "Non Veg Mandis" },
      { id: "md-11", name: "Nawaabs Prawns Mandi (Spl)", pricing: { half: 569, full: 999 }, description: "Premium prawns mandi special", image: imgMandis, category: "Non Veg Mandis" },
      { id: "md-12", name: "Nawaaba Mix Mandi", pricing: { half: 899, full: 1699 }, description: "Mixed meat platter with mandi rice", image: imgMandis, category: "Non Veg Mandis" },
    ],
  },
  {
    id: "mandi-extras",
    name: "Mandi Extra Pieces",
    slug: "mandi-extras",
    items: [
      { id: "me-1", name: "B.B.Q / Faham / Grill / Tandoori Piece", price: 139, description: "Extra grilled chicken piece (any style)", image: imgMandis, category: "Mandi Extra Pieces" },
      { id: "me-2", name: "Extra Mandi Rice", price: 139, description: "Additional portion of aromatic mandi rice", image: imgMandis, category: "Mandi Extra Pieces" },
    ],
  },
  {
    id: "soups",
    name: "Soups",
    slug: "soups",
    items: [
      { id: "sp-1", name: "Veg Soup", price: 70, description: "Classic vegetable soup", image: imgSoups, category: "Soups" },
      { id: "sp-2", name: "Veg Corn Soup", price: 70, description: "Creamy sweet corn soup with veggies", image: imgSoups, category: "Soups" },
      { id: "sp-3", name: "Hot & Sour Veg Soup", price: 70, description: "Spicy and tangy Indo-Chinese soup", image: imgSoups, category: "Soups" },
      { id: "sp-4", name: "Chicken Corn Soup", price: 120, description: "Chicken and corn in a warm broth", image: imgSoups, category: "Soups" },
      { id: "sp-5", name: "Chicken Hot Sour Soup", price: 100, description: "Spicy and sour chicken soup", image: imgSoups, category: "Soups" },
      { id: "sp-6", name: "Paya Soup", price: 120, description: "Traditional mutton trotters soup", image: imgSoups, category: "Soups" },
    ],
  },
  {
    id: "veg-starters",
    name: "Veg Starters",
    slug: "veg-starters",
    items: [
      { id: "vs-1", name: "Gobi Manchurian", price: 90, description: "Crispy cauliflower in spicy Manchurian sauce", image: imgVegStarters, category: "Veg Starters" },
      { id: "vs-2", name: "Paneer Chilli", price: 170, description: "Cottage cheese tossed with peppers & spices", image: imgVegStarters, category: "Veg Starters" },
      { id: "vs-3", name: "Paneer Manchurian", price: 180, description: "Paneer balls in Manchurian gravy", image: imgVegStarters, category: "Veg Starters" },
      { id: "vs-4", name: "Paneer 65", price: 180, description: "Spicy fried paneer bites", image: imgVegStarters, category: "Veg Starters" },
      { id: "vs-5", name: "Mushroom Manchurian", price: 170, description: "Crispy mushroom balls in Manchurian gravy", image: imgVegStarters, category: "Veg Starters" },
      { id: "vs-6", name: "Mushroom Chilli", price: 170, description: "Mushroom tossed with peppers & spices", image: imgVegStarters, category: "Veg Starters" },
      { id: "vs-7", name: "Gobi 65", price: 150, description: "Spicy fried cauliflower bites", image: imgVegStarters, category: "Veg Starters" },
      { id: "vs-8", name: "Mushroom Pepper Fry", price: 170, description: "Mushroom tossed with black pepper", image: imgVegStarters, category: "Veg Starters" },
      { id: "vs-9", name: "Paneer Majestic", price: 210, description: "Paneer cubes in a rich, spicy majestic gravy", image: imgVegStarters, category: "Veg Starters" },
      { id: "vs-10", name: "Baby Corn Chilli", price: 170, description: "Baby corn tossed with peppers & spices", image: imgVegStarters, category: "Veg Starters" },
      { id: "vs-11", name: "Kaju Roast", price: 230, description: "Roasted cashews in a spiced masala coating", image: imgVegStarters, category: "Veg Starters" },
      { id: "vs-12", name: "Mushroom 65", price: 170, description: "Spicy fried mushroom bites", image: imgVegStarters, category: "Veg Starters" },
      { id: "vs-13", name: "Onion Pakoda", price: 120, description: "Crispy onion fritters", image: imgVegStarters, category: "Veg Starters" },
      { id: "vs-14", name: "Paneer Pakoda", price: 180, description: "Crispy fried paneer fritters", image: imgVegStarters, category: "Veg Starters" },
    ],
  },
  {
    id: "nonveg-starters",
    name: "Non-Veg Starters",
    slug: "nonveg-starters",
    items: [
      { id: "ns-1", name: "Chicken Fry", price: 170, description: "Deep fried spicy chicken pieces", image: imgNonvegStarters, category: "Non-Veg Starters" },
      { id: "ns-2", name: "Chicken 65", price: 220, description: "Iconic spicy fried chicken with curry leaves", image: imgNonvegStarters, category: "Non-Veg Starters" },
      { id: "ns-3", name: "Chicken Lollipop", price: 160, description: "Frenched chicken wings in spicy batter", image: imgNonvegStarters, category: "Non-Veg Starters" },
      { id: "ns-4", name: "Chicken Kabab", price: 170, description: "Grilled chicken kabab with spices", image: imgNonvegStarters, category: "Non-Veg Starters" },
      { id: "ns-5", name: "Chicken Manchurian", price: 220, description: "Chicken in Indo-Chinese Manchurian sauce", image: imgNonvegStarters, category: "Non-Veg Starters" },
      { id: "ns-6", name: "HongKong Chicken", price: 240, description: "Chicken in HongKong style sauce", image: imgNonvegStarters, category: "Non-Veg Starters" },
      { id: "ns-7", name: "Chicken 555", price: 250, description: "Spicy triple-fried chicken", image: imgNonvegStarters, category: "Non-Veg Starters" },
      { id: "ns-8", name: "Chilli Wings", price: 190, description: "Spicy chilli coated chicken wings", image: imgNonvegStarters, category: "Non-Veg Starters" },
      { id: "ns-9", name: "Dragon Chicken", price: 230, description: "Spicy chicken with dragon sauce & peppers", image: imgNonvegStarters, category: "Non-Veg Starters" },
      { id: "ns-10", name: "Hariyali Chicken", price: 230, description: "Chicken in green herb marinade", image: imgNonvegStarters, category: "Non-Veg Starters" },
      { id: "ns-11", name: "Egg Chilli", price: 150, description: "Boiled eggs in spicy chilli sauce", image: imgNonvegStarters, category: "Non-Veg Starters" },
      { id: "ns-12", name: "Egg Manchurian", price: 150, description: "Eggs in Indo-Chinese Manchurian sauce", image: imgNonvegStarters, category: "Non-Veg Starters" },
      { id: "ns-13", name: "Majestic Chicken", price: 250, description: "Chicken in rich majestic spice blend", image: imgNonvegStarters, category: "Non-Veg Starters" },
      { id: "ns-14", name: "Butter Garlic Chicken", price: 230, description: "Chicken tossed in butter and garlic", image: imgNonvegStarters, category: "Non-Veg Starters" },
      { id: "ns-15", name: "Lemon Chicken", price: 230, description: "Chicken in tangy lemon sauce", image: imgNonvegStarters, category: "Non-Veg Starters" },
      { id: "ns-16", name: "Kaju Pepper Chicken", price: 250, description: "Chicken with cashews and black pepper", image: imgNonvegStarters, category: "Non-Veg Starters" },
      { id: "ns-17", name: "Schezwan Chicken", price: 250, description: "Chicken in fiery Schezwan sauce", image: imgNonvegStarters, category: "Non-Veg Starters" },
    ],
  },
  {
    id: "biryani",
    name: "Biryani's",
    slug: "biryani",
    items: [
      { id: "br-1", name: "Chicken Dum Biryani", price: 160, description: "Slow-cooked aromatic chicken biryani", image: imgBiryani, category: "Biryani's" },
      { id: "br-2", name: "Chicken Fry Piece Biryani", price: 180, description: "Biryani topped with crispy fried chicken", image: imgBiryani, category: "Biryani's" },
      { id: "br-3", name: "Chicken Manchurian Biryani", price: 220, description: "Biryani with Manchurian chicken", image: imgBiryani, category: "Biryani's" },
      { id: "br-4", name: "Chicken Lollipop Biryani", price: 220, description: "Biryani topped with chicken lollipops", image: imgBiryani, category: "Biryani's" },
      { id: "br-5", name: "Chilli Chicken Biryani", price: 220, description: "Biryani with spicy chilli chicken", image: imgBiryani, category: "Biryani's" },
      { id: "br-6", name: "Chicken Mogalai Biryani", price: 220, description: "Rich Mughlai style chicken biryani", image: imgBiryani, category: "Biryani's" },
      { id: "br-7", name: "Fish Biryani", price: 250, description: "Flavorful biryani with fish", image: imgBiryani, category: "Biryani's" },
      { id: "br-8", name: "Prawns Biryani", price: 270, description: "Flavorful biryani with juicy prawns", image: imgBiryani, category: "Biryani's" },
      { id: "br-9", name: "Veg Biryani", price: 150, description: "Aromatic vegetable biryani", image: imgBiryani, category: "Biryani's" },
      { id: "br-10", name: "Mushroom Biryani", price: 150, description: "Biryani with fresh mushrooms", image: imgBiryani, category: "Biryani's" },
      { id: "br-11", name: "Mutton Fry Piece Biryani", price: 300, description: "Biryani with fried mutton pieces", image: imgBiryani, category: "Biryani's" },
      { id: "br-12", name: "Mutton Chilli Biryani", price: 300, description: "Biryani with spicy chilli mutton", image: imgBiryani, category: "Biryani's" },
      { id: "br-13", name: "Roast Mutton Biryani", price: 300, description: "Biryani with roasted mutton", image: imgBiryani, category: "Biryani's" },
    ],
  },
  {
    id: "rice-items",
    name: "Rice Items",
    slug: "rice-items",
    items: [
      { id: "ri-1", name: "Veg Rice", price: 80, description: "Fried rice with mixed vegetables", image: imgRice, category: "Rice Items" },
      { id: "ri-2", name: "Gobi Rice", price: 90, description: "Cauliflower fried rice", image: imgRice, category: "Rice Items" },
      { id: "ri-3", name: "Mushroom Rice", price: 130, description: "Mushroom fried rice", image: imgRice, category: "Rice Items" },
      { id: "ri-4", name: "Egg Rice", price: 90, description: "Egg fried rice with spices", image: imgRice, category: "Rice Items" },
      { id: "ri-5", name: "Chicken Rice", price: 140, description: "Chicken fried rice with veggies", image: imgRice, category: "Rice Items" },
      { id: "ri-6", name: "Kaju Rice", price: 140, description: "Cashew fried rice", image: imgRice, category: "Rice Items" },
      { id: "ri-7", name: "Ghee Rice", price: 140, description: "Fragrant ghee flavored rice", image: imgRice, category: "Rice Items" },
      { id: "ri-8", name: "Paneer Rice", price: 140, description: "Paneer fried rice with fresh veggies", image: imgRice, category: "Rice Items" },
      { id: "ri-9", name: "Masala Rice", price: 100, description: "Spicy masala flavored rice", image: imgRice, category: "Rice Items" },
      { id: "ri-10", name: "Tomato Rice", price: 100, description: "Tangy tomato flavored rice", image: imgRice, category: "Rice Items" },
      { id: "ri-11", name: "Dal Rice", price: 130, description: "Rice with lentil dal", image: imgRice, category: "Rice Items" },
      { id: "ri-12", name: "Curd Rice", price: 70, description: "Cool curd rice with tempering", image: imgRice, category: "Rice Items" },
    ],
  },
  {
    id: "fish-items",
    name: "Fish Items",
    slug: "fish-items",
    items: [
      { id: "fi-1", name: "Schezwan Fish Dry", price: 220, description: "Fish tossed in fiery Schezwan sauce", image: imgFish, category: "Fish Items" },
      { id: "fi-2", name: "Fish 65", price: 240, description: "Spicy fried fish bites 65 style", image: imgFish, category: "Fish Items" },
      { id: "fi-3", name: "Apollo Fish", price: 250, description: "Crispy fried fish with spicy masala", image: imgFish, category: "Fish Items" },
      { id: "fi-4", name: "Chilli Fish", price: 190, description: "Fish in spicy chilli sauce", image: imgFish, category: "Fish Items" },
      { id: "fi-5", name: "Fish Manchurian", price: 230, description: "Fish in Indo-Chinese Manchurian sauce", image: imgFish, category: "Fish Items" },
    ],
  },
  {
    id: "tandoori-chicken",
    name: "Tandoori Chicken",
    slug: "tandoori-chicken",
    items: [
      { id: "tc-1", name: "Tandoori Chicken Full", price: 500, description: "Full clay oven roasted chicken with spices", image: imgTandoori, category: "Tandoori Chicken" },
      { id: "tc-2", name: "Tandoori Chicken Half", price: 250, description: "Half portion tandoori chicken", image: imgTandoori, category: "Tandoori Chicken" },
      { id: "tc-3", name: "Tangidi Kabab Full", price: 250, description: "Full portion grilled leg kabab", image: imgTandoori, category: "Tandoori Chicken" },
      { id: "tc-4", name: "Chicken Tikka", price: 200, description: "Tender marinated chicken tikka pieces", image: imgTandoori, category: "Tandoori Chicken" },
      { id: "tc-5", name: "Paneer Tikka", price: 200, description: "Grilled paneer cubes with bell peppers", image: imgTandoori, category: "Tandoori Chicken" },
    ],
  },
  {
    id: "roti-breads",
    name: "Roti & Breads",
    slug: "roti-breads",
    items: [
      { id: "rb-1", name: "Tandoori Roti", price: 15, description: "Whole wheat flatbread from tandoor", image: imgRotis, category: "Roti & Breads" },
      { id: "rb-2", name: "Butter Roti", price: 20, description: "Tandoori roti brushed with butter", image: imgRotis, category: "Roti & Breads" },
      { id: "rb-3", name: "Rumal Rotti", price: 40, description: "Thin handkerchief-style roti", image: imgRotis, category: "Roti & Breads" },
      { id: "rb-4", name: "Butter Naan", price: 30, description: "Soft naan bread brushed with butter", image: imgRotis, category: "Roti & Breads" },
      { id: "rb-5", name: "Plain Naan", price: 30, description: "Simple soft naan from clay oven", image: imgRotis, category: "Roti & Breads" },
      { id: "rb-6", name: "Garlic Naan", price: 40, description: "Naan topped with garlic", image: imgRotis, category: "Roti & Breads" },
      { id: "rb-7", name: "Paneer Kulcha", price: 60, description: "Stuffed naan with paneer filling", image: imgRotis, category: "Roti & Breads" },
      { id: "rb-8", name: "Onion Naan", price: 60, description: "Naan stuffed with onions", image: imgRotis, category: "Roti & Breads" },
      { id: "rb-9", name: "Pulka", price: 15, description: "Thin whole wheat roti, puffed on flame", image: imgRotis, category: "Roti & Breads" },
      { id: "rb-10", name: "Butter Pulka", price: 20, description: "Pulka brushed with butter", image: imgRotis, category: "Roti & Breads" },
      { id: "rb-11", name: "Chapati (2 no)", price: 60, description: "Two soft whole wheat chapatis", image: imgRotis, category: "Roti & Breads" },
    ],
  },
  {
    id: "seafood",
    name: "Seafood Items",
    slug: "seafood",
    items: [
      { id: "sf-1", name: "Prawns Fry", price: 270, description: "Crispy fried prawns with spices", image: imgSeafood, category: "Seafood Items" },
      { id: "sf-2", name: "Prawn Curry", price: 270, description: "Prawns in rich spicy curry gravy", image: imgSeafood, category: "Seafood Items" },
      { id: "sf-3", name: "Prawn 65", price: 270, description: "Spicy deep fried prawns 65 style", image: imgSeafood, category: "Seafood Items" },
      { id: "sf-4", name: "Chilli Prawns", price: 270, description: "Prawns tossed in chilli sauce", image: imgSeafood, category: "Seafood Items" },
      { id: "sf-5", name: "Garlic Prawns", price: 270, description: "Prawns tossed with garlic and butter", image: imgSeafood, category: "Seafood Items" },
      { id: "sf-6", name: "Finger Fish", price: 270, description: "Crispy finger-shaped fish fry", image: imgSeafood, category: "Seafood Items" },
    ],
  },
  {
    id: "mutton-items",
    name: "Mutton Items",
    slug: "mutton-items",
    items: [
      { id: "mt-1", name: "Mutton Fry", price: 300, description: "Dry fried mutton with aromatic spices", image: imgMutton, category: "Mutton Items" },
      { id: "mt-2", name: "Chilli Mutton", price: 300, description: "Mutton in spicy chilli sauce", image: imgMutton, category: "Mutton Items" },
      { id: "mt-3", name: "Mutton Manchurian", price: 300, description: "Mutton in spicy Manchurian sauce", image: imgMutton, category: "Mutton Items" },
      { id: "mt-4", name: "Mutton 65", price: 300, description: "Spicy fried mutton bites", image: imgMutton, category: "Mutton Items" },
      { id: "mt-5", name: "Schezwan Mutton", price: 300, description: "Mutton in fiery Schezwan sauce", image: imgMutton, category: "Mutton Items" },
      { id: "mt-6", name: "Mutton Curry", price: 300, description: "Slow-cooked mutton in rich gravy", image: imgMutton, category: "Mutton Items" },
    ],
  },
  {
    id: "bbq",
    name: "BBQ Menu (5 PM - 10 PM)",
    slug: "bbq",
    items: [
      { id: "bq-1", name: "Full Leg", price: 130, description: "Full chicken leg grilled to perfection", image: imgBbq, category: "BBQ Menu" },
      { id: "bq-2", name: "Leg", price: 60, description: "Grilled chicken leg piece", image: imgBbq, category: "BBQ Menu" },
      { id: "bq-3", name: "Wings", price: 140, description: "Spicy grilled chicken wings", image: imgBbq, category: "BBQ Menu" },
      { id: "bq-4", name: "Chicken Stick (4 Pcs)", price: 100, description: "Grilled chicken on sticks", image: imgBbq, category: "BBQ Menu" },
      { id: "bq-5", name: "Lolly Pop", price: 140, description: "Grilled chicken lollipop", image: imgBbq, category: "BBQ Menu" },
      { id: "bq-6", name: "Fish", price: 60, description: "Grilled fish piece", image: imgBbq, category: "BBQ Menu" },
      { id: "bq-7", name: "Paneer Tikka", price: 150, description: "Grilled paneer cubes with bell peppers", image: imgBbq, category: "BBQ Menu" },
      { id: "bq-8", name: "Mushroom Tikka", price: 120, description: "Grilled mushroom with spices", image: imgBbq, category: "BBQ Menu" },
    ],
  },
  {
    id: "night-items",
    name: "Night Items (11 PM - 3 AM)",
    slug: "night-items",
    items: [
      { id: "ni-1", name: "Sandwich", price: 50, description: "Grilled sandwich with veggies & cheese", image: imgNight, category: "Night Items" },
      { id: "ni-2", name: "Egg Omelette", price: 50, description: "Fluffy egg omelette with onions & chillies", image: imgNight, category: "Night Items" },
      { id: "ni-3", name: "Puff", price: 20, description: "Crispy puff pastry", image: imgNight, category: "Night Items" },
      { id: "ni-4", name: "Egg Samosa (2)", price: 30, description: "Two egg-filled samosas", image: imgNight, category: "Night Items" },
      { id: "ni-5", name: "Bread Omelette", price: 50, description: "Omelette sandwiched in bread", image: imgNight, category: "Night Items" },
      { id: "ni-6", name: "Burger Veg", price: 70, description: "Crispy veg patty burger with sauces", image: imgNight, category: "Night Items" },
      { id: "ni-7", name: "Veg Puff", price: 50, description: "Crispy veg puff pastry", image: imgNight, category: "Night Items" },
      { id: "ni-8", name: "Chicken Roll", price: 60, description: "Chicken wrapped in a flaky paratha roll", image: imgNight, category: "Night Items" },
      { id: "ni-9", name: "Veg Roll", price: 30, description: "Vegetable wrapped in a paratha roll", image: imgNight, category: "Night Items" },
      { id: "ni-10", name: "Paneer Roll", price: 50, description: "Paneer wrapped in a paratha roll", image: imgNight, category: "Night Items" },
    ],
  },
  {
    id: "pickles",
    name: "Non-Veg Pickles",
    slug: "pickles",
    items: [
      { id: "pk-1", name: "Chicken Pickle 250g", price: 150, description: "Spicy homemade chicken pickle - 250g", image: imgPickles, category: "Non-Veg Pickles" },
      { id: "pk-2", name: "Chicken Pickle 500g", price: 300, description: "Spicy homemade chicken pickle - 500g", image: imgPickles, category: "Non-Veg Pickles" },
      { id: "pk-3", name: "Chicken Pickle 1kg", price: 500, description: "Spicy homemade chicken pickle - 1kg", image: imgPickles, category: "Non-Veg Pickles" },
      { id: "pk-4", name: "Prawn Pickle 250g", price: 300, description: "Premium prawn pickle - 250g", image: imgPickles, category: "Non-Veg Pickles" },
      { id: "pk-5", name: "Prawn Pickle 500g", price: 500, description: "Premium prawn pickle - 500g", image: imgPickles, category: "Non-Veg Pickles" },
      { id: "pk-6", name: "Prawn Pickle 1kg", price: 800, description: "Premium prawn pickle - 1kg", image: imgPickles, category: "Non-Veg Pickles" },
    ],
  },
  {
    id: "juices",
    name: "Fresh Juices",
    slug: "juices",
    items: [
      { id: "jc-1", name: "Watermelon Juice", price: 70, description: "Refreshing watermelon juice", image: imgJuices, category: "Fresh Juices" },
      { id: "jc-2", name: "Mango Juice", price: 80, description: "Sweet mango pulp juice", image: imgJuices, category: "Fresh Juices" },
      { id: "jc-3", name: "Papaya Juice", price: 100, description: "Fresh papaya juice", image: imgJuices, category: "Fresh Juices" },
      { id: "jc-4", name: "Muskmelon Juice", price: 80, description: "Cool muskmelon juice", image: imgJuices, category: "Fresh Juices" },
      { id: "jc-5", name: "Apple Juice", price: 130, description: "Fresh apple juice", image: imgJuices, category: "Fresh Juices" },
      { id: "jc-6", name: "Orange Juice", price: 100, description: "Fresh squeezed orange juice", image: imgJuices, category: "Fresh Juices" },
      { id: "jc-7", name: "Pomegranate Juice", price: 100, description: "Rich pomegranate juice full of antioxidants", image: imgJuices, category: "Fresh Juices" },
      { id: "jc-8", name: "Grapes Juice", price: 100, description: "Sweet fresh grapes juice", image: imgJuices, category: "Fresh Juices" },
      { id: "jc-9", name: "Lemon Juice", price: 50, description: "Fresh squeezed lemon with mint", image: imgJuices, category: "Fresh Juices" },
      { id: "jc-10", name: "Moosambi Juice", price: 80, description: "Sweet lime juice", image: imgJuices, category: "Fresh Juices" },
      { id: "jc-11", name: "Pineapple Juice", price: 80, description: "Tangy fresh pineapple juice", image: imgJuices, category: "Fresh Juices" },
      { id: "jc-12", name: "Kiwi Juice", price: 140, description: "Fresh kiwi juice", image: imgJuices, category: "Fresh Juices" },
      { id: "jc-13", name: "Sapota Juice", price: 140, description: "Sweet sapota (chikoo) juice", image: imgJuices, category: "Fresh Juices" },
      { id: "jc-14", name: "Pumpkin Juice", price: 60, description: "Healthy pumpkin juice", image: imgJuices, category: "Fresh Juices" },
      { id: "jc-15", name: "Carrot Juice", price: 80, description: "Fresh carrot juice", image: imgJuices, category: "Fresh Juices" },
      { id: "jc-16", name: "ABC Juice (Apple-Beetroot-Carrot)", price: 100, description: "Apple, beetroot & carrot power juice", image: imgJuices, category: "Fresh Juices" },
      { id: "jc-17", name: "Lassi", price: 50, description: "Traditional yogurt-based drink", image: imgJuices, category: "Fresh Juices" },
    ],
  },
];

export default menuCategories;
