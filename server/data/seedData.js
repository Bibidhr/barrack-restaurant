const initialMenuItems = [
  {
    name: "The Grand Latino Platter",
    category: "latin",
    description: "Served with Taco, Nacho, loaded potato, Burrito, and charcoal grilled garden vegetables.",
    price: 880,
    currency: "NPR",
    badge: "Chef's Signature",
    image: "/images/platter.webp",
    isVeg: false,
    popular: true
  },
  {
    name: "Brazilian Coxinha",
    category: "latin",
    description: "Stuffed with a flavorful chicken mixture coated in golden bread crumbs and deep fried.",
    price: 525,
    currency: "NPR",
    badge: "Authentic",
    image: "/images/food.webp",
    isVeg: false,
    popular: true
  },
  {
    name: "Chhoila / Tikka Taco",
    category: "latin",
    description: "Taco with authentic Nepali taste bites, fresh tomato salsa, chopped onion, cheddar cheese, and cilantro.",
    price: 480,
    currency: "NPR",
    badge: "Fusion Special",
    image: "/images/food_dish1.jpg",
    isVeg: false,
    popular: true
  },
  {
    name: "Tropicana Hawaiian Platter",
    category: "latin",
    description: "The thrill of Hawaiian Islands served with fresh pineapple, crisp garden greens, and honey lime chicken.",
    price: 485,
    currency: "NPR",
    badge: "Tropical Zest",
    image: "/images/food_dish2.jpg",
    isVeg: false,
    popular: false
  },
  {
    name: "Loaded Potato in Jacket",
    category: "latin",
    description: "Stuffed with salsa, sliced jalapeño, spiced black beans, and oven melted cheddar baked in a jacket.",
    price: 440,
    currency: "NPR",
    badge: "Comfort",
    image: "/images/dining_seating.jpg",
    isVeg: true,
    popular: false
  },
  {
    name: "Smoked Chicken Sadeko",
    category: "asian",
    description: "Charcoal-roasted chicken cubes tossed with cold-pressed mustard oil, fenugreek, and fresh lime.",
    price: 450,
    currency: "NPR",
    badge: "Himalayan Charcoal",
    image: "/images/sekuwa_view.webp",
    isVeg: false,
    popular: true
  },
  {
    name: "Kutumba Nepali Thali",
    category: "asian",
    description: "Authentic Kathmandu Bhanchha style thali with seasonal curries, local dal, and fragrant rice.",
    price: 650,
    currency: "NPR",
    badge: "Bhanchha Style",
    image: "/images/dish_platter.jpg",
    isVeg: false,
    popular: false
  },
  {
    name: "Copacabana Special Pizza",
    category: "pizza",
    description: "Hand-stretched stone-baked crust topped with smoked chicken, mozzarella, sundried tomato, and fresh herbs.",
    price: 790,
    currency: "NPR",
    badge: "Stone Baked",
    image: "/images/dish_platter.jpg",
    isVeg: false,
    popular: true
  },
  {
    name: "Grilled Chicken Sizzler",
    category: "pizza",
    description: "Sizzling iron platter with buttered garden vegetables, French fries, and pepper mushroom glaze.",
    price: 820,
    currency: "NPR",
    badge: "Sizzling Iron",
    image: "/images/special_dish.jpg",
    isVeg: false,
    popular: false
  },
  {
    name: "The Copacabana Sunset",
    category: "bar",
    description: "Tropical rum blend infused with passionfruit pulp, lime juice, orange liqueur and layered grenadine.",
    price: 650,
    currency: "NPR",
    badge: "Craft Mix",
    image: "/images/cocktails.webp",
    isVeg: true,
    popular: true
  },
  {
    name: "Daily 1+1 Happy Hour Spirits",
    category: "bar",
    description: "Buy 1 Get 1 on selected house spirits and chilled beers daily between 4:00 PM and 8:00 PM.",
    price: 550,
    currency: "NPR",
    badge: "4 PM — 8 PM",
    image: "/images/neon_bar.jpg",
    isVeg: true,
    popular: true
  },
  {
    name: "Sizzling Chocolate Brownie",
    category: "dessert",
    description: "Warm Belgian chocolate brownie served on a smoking skillet with vanilla bean gelato.",
    price: 420,
    currency: "NPR",
    badge: "Sizzling Sweet",
    image: "/images/dining_seating.jpg",
    isVeg: true,
    popular: true
  }
];

const restaurantInfo = {
  name: "The Barrack Rooftop Lounge",
  subname: "Copacabana Kathmandu",
  location: "6th Floor Rooftop, Everest Bank Building, Gairidhara Sadak, Kathmandu",
  phone: "+977 981-0786445",
  hours: "Monday – Sunday: 12:00 PM – 11:30 PM",
  happyHour: "Daily: 4:00 PM – 8:00 PM",
  rating: 4.3,
  reviewsCount: 181
};

module.exports = { initialMenuItems, restaurantInfo };
