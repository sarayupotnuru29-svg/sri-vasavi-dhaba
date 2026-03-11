export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: "dhaba-special",
    name: "Dhaba Special",
    slug: "dhaba-special",
    items: [
      { id: "ds-1", name: "Ragi Mudda", price: 20, description: "Traditional ragi mudda served with spicy curry", image: "/assets/menu/dhaba-special/ragi-mudda.jpg", category: "Dhaba Special" },
      { id: "ds-2", name: "Chepala Pulusu", price: 120, description: "Authentic Andhra fish curry with tamarind", image: "/assets/menu/dhaba-special/chepala-pulusu.jpg", category: "Dhaba Special" },
      { id: "ds-3", name: "Korameenu Pulusu", price: 200, description: "Premium murrel fish cooked in tangy gravy", image: "/assets/menu/dhaba-special/korameenu-pulusu.jpg", category: "Dhaba Special" },
      { id: "ds-4", name: "Natukodi Pulusu", price: 250, description: "Country chicken in spicy home-style gravy", image: "/assets/menu/dhaba-special/natukodi-pulusu.jpg", category: "Dhaba Special" },
      { id: "ds-5", name: "Mutton Talakura", price: 250, description: "Spicy mutton head curry, a dhaba delicacy", image: "/assets/menu/dhaba-special/mutton-talakura.jpg", category: "Dhaba Special" },
      { id: "ds-6", name: "Boti Kura", price: 250, description: "Tender mutton boti in rich masala gravy", image: "/assets/menu/dhaba-special/boti-kura.jpg", category: "Dhaba Special" },
    ],
  },
  {
    id: "tiffins",
    name: "Tiffins",
    slug: "tiffins",
    items: [
      { id: "tf-1", name: "Idly", price: 40, description: "Soft steamed rice cakes with chutney & sambar", image: "/assets/menu/tiffins/idly.jpg", category: "Tiffins" },
      { id: "tf-2", name: "Thatte Idly", price: 50, description: "Large plate-style idly, soft and fluffy", image: "/assets/menu/tiffins/thatte-idly.jpg", category: "Tiffins" },
      { id: "tf-3", name: "Ghee Idly Podi", price: 60, description: "Idly drizzled with ghee and spice powder", image: "/assets/menu/tiffins/ghee-idly-podi.jpg", category: "Tiffins" },
      { id: "tf-4", name: "Sambar Idly", price: 50, description: "Idly soaked in flavorful lentil sambar", image: "/assets/menu/tiffins/sambar-idly.jpg", category: "Tiffins" },
      { id: "tf-5", name: "Plain Dosa", price: 50, description: "Crispy golden dosa with chutneys", image: "/assets/menu/tiffins/plain-dosa.jpg", category: "Tiffins" },
      { id: "tf-6", name: "Karam Dosa", price: 60, description: "Dosa spread with spicy red chilli paste", image: "/assets/menu/tiffins/karam-dosa.jpg", category: "Tiffins" },
      { id: "tf-7", name: "Masala Dosa", price: 70, description: "Dosa filled with spiced potato masala", image: "/assets/menu/tiffins/masala-dosa.jpg", category: "Tiffins" },
      { id: "tf-8", name: "Onion Dosa", price: 70, description: "Dosa topped with crispy onion bits", image: "/assets/menu/tiffins/onion-dosa.jpg", category: "Tiffins" },
      { id: "tf-9", name: "Egg Dosa", price: 70, description: "Dosa topped with a spread of egg", image: "/assets/menu/tiffins/egg-dosa.jpg", category: "Tiffins" },
      { id: "tf-10", name: "Poori", price: 50, description: "Deep fried puffy bread with curry", image: "/assets/menu/tiffins/poori.jpg", category: "Tiffins" },
      { id: "tf-11", name: "Pongal", price: 50, description: "Comforting rice and lentil dish with ghee", image: "/assets/menu/tiffins/pongal.jpg", category: "Tiffins" },
      { id: "tf-12", name: "Upma", price: 40, description: "Savory semolina breakfast dish", image: "/assets/menu/tiffins/upma.jpg", category: "Tiffins" },
      { id: "tf-13", name: "Lemon Rice", price: 50, description: "Tangy lemon flavored rice with peanuts", image: "/assets/menu/tiffins/lemon-rice.jpg", category: "Tiffins" },
    ],
  },
  {
    id: "mandis",
    name: "Non Veg Mandis",
    slug: "mandis",
    items: [
      { id: "md-1", name: "Nawaabe Chicken Mandi", price: 250, description: "Royal style chicken mandi with aromatic rice", image: "/assets/menu/mandis/nawaabe-chicken-mandi.jpg", category: "Non Veg Mandis" },
      { id: "md-2", name: "Grilled Mandi", price: 280, description: "Grilled chicken served on fragrant mandi rice", image: "/assets/menu/mandis/grilled-mandi.jpg", category: "Non Veg Mandis" },
      { id: "md-3", name: "Natukodi Chicken Mandi", price: 300, description: "Country chicken mandi with authentic spices", image: "/assets/menu/mandis/natukodi-mandi.jpg", category: "Non Veg Mandis" },
      { id: "md-4", name: "Chicken Steak Mandi", price: 280, description: "Tender chicken steak on a bed of mandi rice", image: "/assets/menu/mandis/chicken-steak-mandi.jpg", category: "Non Veg Mandis" },
      { id: "md-5", name: "Arabic Mutton Mandi", price: 350, description: "Slow-cooked mutton in Arabic mandi style", image: "/assets/menu/mandis/arabic-mutton-mandi.jpg", category: "Non Veg Mandis" },
      { id: "md-6", name: "Grill Fish Mandi", price: 300, description: "Grilled fish with fragrant mandi rice", image: "/assets/menu/mandis/grill-fish-mandi.jpg", category: "Non Veg Mandis" },
      { id: "md-7", name: "Nawaaba Mix Mandi", price: 350, description: "Mixed meat platter with mandi rice", image: "/assets/menu/mandis/mix-mandi.jpg", category: "Non Veg Mandis" },
      { id: "md-8", name: "Extra Mandi Rice", price: 80, description: "Additional portion of aromatic mandi rice", image: "/assets/menu/mandis/extra-mandi-rice.jpg", category: "Non Veg Mandis" },
      { id: "md-9", name: "Extra Chicken Pieces", price: 100, description: "Extra grilled chicken pieces", image: "/assets/menu/mandis/extra-mandi-pieces.jpg", category: "Non Veg Mandis" },
    ],
  },
  {
    id: "soups-starters",
    name: "Soups & Starters",
    slug: "soups-starters",
    items: [
      { id: "ss-1", name: "Veg Corn Soup", price: 80, description: "Creamy sweet corn soup with veggies", image: "/assets/menu/soups-starters/veg-corn-soup.jpg", category: "Soups & Starters" },
      { id: "ss-2", name: "Hot & Sour Soup", price: 80, description: "Spicy and tangy Indo-Chinese soup", image: "/assets/menu/soups-starters/hot-sour-soup.jpg", category: "Soups & Starters" },
      { id: "ss-3", name: "Chicken Corn Soup", price: 100, description: "Chicken and corn in a warm broth", image: "/assets/menu/soups-starters/chicken-corn-soup.jpg", category: "Soups & Starters" },
      { id: "ss-4", name: "Paya Soup", price: 120, description: "Traditional mutton trotters soup", image: "/assets/menu/soups-starters/paya-soup.jpg", category: "Soups & Starters" },
      { id: "ss-5", name: "Gobi Manchurian", price: 120, description: "Crispy cauliflower in spicy Manchurian sauce", image: "/assets/menu/soups-starters/gobi-manchurian.jpg", category: "Soups & Starters" },
      { id: "ss-6", name: "Paneer Chilli", price: 150, description: "Cottage cheese tossed with peppers & spices", image: "/assets/menu/soups-starters/paneer-chilli.jpg", category: "Soups & Starters" },
      { id: "ss-7", name: "Mushroom Manchurian", price: 140, description: "Crispy mushroom balls in Manchurian gravy", image: "/assets/menu/soups-starters/mushroom-manchurian.jpg", category: "Soups & Starters" },
      { id: "ss-8", name: "Paneer Majestic", price: 160, description: "Paneer cubes in a rich, spicy majestic gravy", image: "/assets/menu/soups-starters/paneer-majestic.jpg", category: "Soups & Starters" },
      { id: "ss-9", name: "Kaju Roast", price: 180, description: "Roasted cashews in a spiced masala coating", image: "/assets/menu/soups-starters/kaju-roast.jpg", category: "Soups & Starters" },
      { id: "ss-10", name: "Chicken Fry", price: 150, description: "Deep fried spicy chicken pieces", image: "/assets/menu/soups-starters/chicken-fry.jpg", category: "Soups & Starters" },
      { id: "ss-11", name: "Chicken 65", price: 160, description: "Iconic spicy fried chicken with curry leaves", image: "/assets/menu/soups-starters/chicken-65.jpg", category: "Soups & Starters" },
      { id: "ss-12", name: "Chicken Lollipop", price: 180, description: "Frenched chicken wings in spicy batter", image: "/assets/menu/soups-starters/chicken-lollipop.jpg", category: "Soups & Starters" },
      { id: "ss-13", name: "Dragon Chicken", price: 180, description: "Spicy chicken with dragon sauce & peppers", image: "/assets/menu/soups-starters/dragon-chicken.jpg", category: "Soups & Starters" },
      { id: "ss-14", name: "Egg Chilli", price: 100, description: "Boiled eggs in spicy chilli sauce", image: "/assets/menu/soups-starters/egg-chilli.jpg", category: "Soups & Starters" },
      { id: "ss-15", name: "Majestic Chicken", price: 180, description: "Chicken in rich majestic spice blend", image: "/assets/menu/soups-starters/majestic-chicken.jpg", category: "Soups & Starters" },
    ],
  },
  {
    id: "biryani-rice",
    name: "Biryani & Rice",
    slug: "biryani-rice",
    items: [
      { id: "br-1", name: "Chicken Dum Biryani", price: 180, description: "Slow-cooked aromatic chicken biryani", image: "/assets/menu/biryani-rice/chicken-dum-biryani.jpg", category: "Biryani & Rice" },
      { id: "br-2", name: "Chicken Fry Piece Biryani", price: 200, description: "Biryani topped with crispy fried chicken", image: "/assets/menu/biryani-rice/chicken-fry-biryani.jpg", category: "Biryani & Rice" },
      { id: "br-3", name: "Mutton Biryani", price: 250, description: "Rich mutton biryani with tender meat", image: "/assets/menu/biryani-rice/mutton-biryani.jpg", category: "Biryani & Rice" },
      { id: "br-4", name: "Prawns Biryani", price: 250, description: "Flavorful biryani with juicy prawns", image: "/assets/menu/biryani-rice/prawns-biryani.jpg", category: "Biryani & Rice" },
      { id: "br-5", name: "Veg Rice", price: 100, description: "Fried rice with mixed vegetables", image: "/assets/menu/biryani-rice/veg-rice.jpg", category: "Biryani & Rice" },
      { id: "br-6", name: "Gobi Rice", price: 110, description: "Cauliflower fried rice", image: "/assets/menu/biryani-rice/gobi-rice.jpg", category: "Biryani & Rice" },
      { id: "br-7", name: "Egg Rice", price: 110, description: "Egg fried rice with spices", image: "/assets/menu/biryani-rice/egg-rice.jpg", category: "Biryani & Rice" },
      { id: "br-8", name: "Chicken Rice", price: 140, description: "Chicken fried rice with veggies", image: "/assets/menu/biryani-rice/chicken-rice.jpg", category: "Biryani & Rice" },
      { id: "br-9", name: "Paneer Rice", price: 130, description: "Paneer fried rice with fresh veggies", image: "/assets/menu/biryani-rice/paneer-rice.jpg", category: "Biryani & Rice" },
    ],
  },
  {
    id: "seafood-mutton",
    name: "Seafood & Mutton",
    slug: "seafood-mutton",
    items: [
      { id: "sm-1", name: "Apollo Fish", price: 200, description: "Crispy fried fish with spicy masala", image: "/assets/menu/seafood-mutton/apollo-fish.jpg", category: "Seafood & Mutton" },
      { id: "sm-2", name: "Fish Manchurian", price: 200, description: "Fish in Indo-Chinese Manchurian sauce", image: "/assets/menu/seafood-mutton/fish-manchurian.jpg", category: "Seafood & Mutton" },
      { id: "sm-3", name: "Schezwan Fish", price: 220, description: "Fish tossed in fiery Schezwan sauce", image: "/assets/menu/seafood-mutton/schezwan-fish.jpg", category: "Seafood & Mutton" },
      { id: "sm-4", name: "Prawns Fry", price: 220, description: "Crispy fried prawns with spices", image: "/assets/menu/seafood-mutton/prawns-fry.jpg", category: "Seafood & Mutton" },
      { id: "sm-5", name: "Prawns Curry", price: 220, description: "Prawns in rich spicy curry gravy", image: "/assets/menu/seafood-mutton/prawns-curry.jpg", category: "Seafood & Mutton" },
      { id: "sm-6", name: "Prawns 65", price: 230, description: "Spicy deep fried prawns 65 style", image: "/assets/menu/seafood-mutton/prawns-65.jpg", category: "Seafood & Mutton" },
      { id: "sm-7", name: "Garlic Prawns", price: 240, description: "Prawns tossed with garlic and butter", image: "/assets/menu/seafood-mutton/garlic-prawns.jpg", category: "Seafood & Mutton" },
      { id: "sm-8", name: "Mutton Fry", price: 250, description: "Dry fried mutton with aromatic spices", image: "/assets/menu/seafood-mutton/mutton-fry.jpg", category: "Seafood & Mutton" },
      { id: "sm-9", name: "Mutton 65", price: 260, description: "Spicy fried mutton bites", image: "/assets/menu/seafood-mutton/mutton-65.jpg", category: "Seafood & Mutton" },
      { id: "sm-10", name: "Mutton Curry", price: 250, description: "Slow-cooked mutton in rich gravy", image: "/assets/menu/seafood-mutton/mutton-curry.jpg", category: "Seafood & Mutton" },
      { id: "sm-11", name: "Mutton Manchurian", price: 260, description: "Mutton in spicy Manchurian sauce", image: "/assets/menu/seafood-mutton/mutton-manchurian.jpg", category: "Seafood & Mutton" },
    ],
  },
  {
    id: "tandoori-rotis",
    name: "Tandoori & Rotis",
    slug: "tandoori-rotis",
    items: [
      { id: "tr-1", name: "Tandoori Chicken", price: 250, description: "Clay oven roasted chicken with spices", image: "/assets/menu/tandoori-rotis/tandoori-chicken.jpg", category: "Tandoori & Rotis" },
      { id: "tr-2", name: "Tandoori Roti", price: 20, description: "Whole wheat flatbread from tandoor", image: "/assets/menu/tandoori-rotis/tandoori-roti.jpg", category: "Tandoori & Rotis" },
      { id: "tr-3", name: "Butter Naan", price: 40, description: "Soft naan bread brushed with butter", image: "/assets/menu/tandoori-rotis/butter-naan.jpg", category: "Tandoori & Rotis" },
      { id: "tr-4", name: "Plain Naan", price: 30, description: "Simple soft naan from clay oven", image: "/assets/menu/tandoori-rotis/plain-naan.jpg", category: "Tandoori & Rotis" },
      { id: "tr-5", name: "Paneer Kulcha", price: 50, description: "Stuffed naan with paneer filling", image: "/assets/menu/tandoori-rotis/paneer-kulcha.jpg", category: "Tandoori & Rotis" },
      { id: "tr-6", name: "Pulka", price: 15, description: "Thin whole wheat roti, puffed on flame", image: "/assets/menu/tandoori-rotis/pulka.jpg", category: "Tandoori & Rotis" },
    ],
  },
  {
    id: "bbq-night",
    name: "BBQ & Night Items",
    slug: "bbq-night",
    items: [
      { id: "bn-1", name: "Full Leg BBQ", price: 500, description: "Whole leg barbecue, slow grilled to perfection", image: "/assets/menu/bbq-night/full-leg.jpg", category: "BBQ & Night Items" },
      { id: "bn-2", name: "Chicken Leg", price: 120, description: "Grilled chicken leg with spicy rub", image: "/assets/menu/bbq-night/chicken-leg.jpg", category: "BBQ & Night Items" },
      { id: "bn-3", name: "Wings", price: 150, description: "Spicy grilled chicken wings", image: "/assets/menu/bbq-night/wings.jpg", category: "BBQ & Night Items" },
      { id: "bn-4", name: "Paneer Tikka", price: 150, description: "Grilled paneer cubes with bell peppers", image: "/assets/menu/bbq-night/paneer-tikka.jpg", category: "BBQ & Night Items" },
      { id: "bn-5", name: "Sandwich", price: 60, description: "Grilled sandwich with veggies & cheese", image: "/assets/menu/bbq-night/sandwich.jpg", category: "BBQ & Night Items" },
      { id: "bn-6", name: "Egg Omelette", price: 40, description: "Fluffy egg omelette with onions & chillies", image: "/assets/menu/bbq-night/omelette.jpg", category: "BBQ & Night Items" },
      { id: "bn-7", name: "Chicken Roll", price: 80, description: "Chicken wrapped in a flaky paratha roll", image: "/assets/menu/bbq-night/chicken-roll.jpg", category: "BBQ & Night Items" },
      { id: "bn-8", name: "Veg Burger", price: 60, description: "Crispy veg patty burger with sauces", image: "/assets/menu/bbq-night/veg-burger.jpg", category: "BBQ & Night Items" },
    ],
  },
  {
    id: "juices",
    name: "Fresh Juices",
    slug: "juices",
    items: [
      { id: "jc-1", name: "Lemon Juice", price: 30, description: "Fresh squeezed lemon with mint", image: "/assets/menu/juices/lemon.jpg", category: "Fresh Juices" },
      { id: "jc-2", name: "Watermelon Juice", price: 40, description: "Refreshing watermelon juice", image: "/assets/menu/juices/watermelon.jpg", category: "Fresh Juices" },
      { id: "jc-3", name: "Pineapple Juice", price: 50, description: "Tangy fresh pineapple juice", image: "/assets/menu/juices/pineapple.jpg", category: "Fresh Juices" },
      { id: "jc-4", name: "Mango Juice", price: 50, description: "Sweet mango pulp juice", image: "/assets/menu/juices/mango.jpg", category: "Fresh Juices" },
      { id: "jc-5", name: "Muskmelon Juice", price: 40, description: "Cool muskmelon juice", image: "/assets/menu/juices/muskmelon.jpg", category: "Fresh Juices" },
      { id: "jc-6", name: "Apple Juice", price: 60, description: "Fresh apple juice", image: "/assets/menu/juices/apple.jpg", category: "Fresh Juices" },
      { id: "jc-7", name: "Pomegranate Juice", price: 70, description: "Rich pomegranate juice full of antioxidants", image: "/assets/menu/juices/pomegranate.jpg", category: "Fresh Juices" },
      { id: "jc-8", name: "Grapes Juice", price: 50, description: "Sweet fresh grapes juice", image: "/assets/menu/juices/grapes.jpg", category: "Fresh Juices" },
      { id: "jc-9", name: "ABC Juice", price: 60, description: "Apple, beetroot & carrot power juice", image: "/assets/menu/juices/abc-juice.jpg", category: "Fresh Juices" },
    ],
  },
];

export default menuCategories;
