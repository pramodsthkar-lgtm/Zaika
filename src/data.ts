import { MenuItem, Review } from './types';

export const menuItems: MenuItem[] = [
  // Main Course
  { id: "mc1", name: "Matar Paneer", description: "Cottage cheese and peas in classic tomato onion gravy.", price: "₹215", image: "https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&q=80&w=800", category: "Main Course" },
  { id: "mc2", name: "Shahi Paneer", description: "Royal cottage cheese curry with creamy cashew gravy.", price: "₹250", image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&q=80&w=800", category: "Main Course" },
  { id: "mc3", name: "Butter Paneer Masala", description: "Soft paneer simmered in buttery, spiced curry.", price: "₹250", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&q=80&w=800", category: "Main Course" },
  { id: "mc4", name: "Paneer Tikka Masala", description: "Tandoori paneer cooked in rich tomato gravy.", price: "₹225", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&q=80&w=800", category: "Main Course" },
  { id: "mc5", name: "Kadhai Paneer", description: "Chunky paneer tossed in spicy capsicum onion masala.", price: "₹235", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800", category: "Main Course" },
  { id: "mc6", name: "Paneer Lababdar", description: "Creamy and tangy paneer curry with rich spices.", price: "₹285", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80&w=800", category: "Main Course" },
  { id: "mc7", name: "Dal Makhani", description: "Slow cooked creamy black lentils in buttery gravy.", price: "₹265", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800", category: "Main Course" },
  { id: "mc8", name: "Dal Fry", description: "Tadka dal with bold flavours and homely comfort.", price: "₹155", image: "https://images.unsplash.com/photo-1546833999-b14e3d5be7fa?auto=format&fit=crop&q=80&w=800", category: "Main Course" },
  { id: "mc9", name: "Chana Masala", description: "Spicy and tangy chickpea curry packed with flavour.", price: "₹165", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800", category: "Main Course" },
  { id: "mc10", name: "Malai Kofta", description: "Soft cottage cheese dumplings in rich, creamy gravy.", price: "₹270", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800", category: "Main Course" },
  { id: "mc11", name: "Veg Kolhapuri", description: "Spicy and bold mixed veg in a Kolhapuri masala.", price: "₹210", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=800", category: "Main Course" },

  // Starters
  { id: "s1", name: "Paneer Tikka", description: "Smoky and spiced paneer cubes grilled in tandoori masala.", price: "₹245", image: "https://images.unsplash.com/photo-1599487405270-87dc4ae8a8fb?auto=format&fit=crop&q=80&w=800", category: "Starters" },
  { id: "s2", name: "Paneer Malai Tikka", description: "Creamy, melt in mouth paneer tikka grilled to perfection.", price: "₹280", image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800", category: "Starters" },
  { id: "s3", name: "Hara Bhara Kebab", description: "Spinach and green pea kebab with rich flavours.", price: "₹190", image: "https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800", category: "Starters" },
  { id: "s4", name: "Dahi Kebab", description: "Crispy outside, soft yogurt based kebab inside.", price: "₹245", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800", category: "Starters" },
  { id: "s5", name: "Veg Kebab", description: "Deliciously seasoned vegetable patties, tandoori grilled.", price: "₹130", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=800", category: "Starters" },

  // Breads
  { id: "b1", name: "Tandoori Roti", description: "Classic whole wheat roti baked in tandoori.", price: "₹15", image: "https://images.unsplash.com/photo-1626200419109-388270562e84?auto=format&fit=crop&q=80&w=800", category: "Breads" },
  { id: "b2", name: "Butter Roti", description: "Tandoori roti topped with a dollop of butter.", price: "₹20", image: "https://images.unsplash.com/photo-1589363460779-fd829dd89d31?auto=format&fit=crop&q=80&w=800", category: "Breads" },
  { id: "b3", name: "Butter Naan", description: "Fluffy naan brushed generously with butter.", price: "₹45", image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=800", category: "Breads" },
  { id: "b4", name: "Garlic Naan", description: "Naan infused with minced garlic and herbs.", price: "₹50", image: "https://images.unsplash.com/photo-1516684732162-720a05bb5d19?auto=format&fit=crop&q=80&w=800", category: "Breads" },
  { id: "b5", name: "Lachha Paratha", description: "Multi layered flaky paratha cooked golden.", price: "₹45", image: "https://images.unsplash.com/photo-1573356073809-5c4d09228807?auto=format&fit=crop&q=80&w=800", category: "Breads" },
  { id: "b6", name: "Missi Roti", description: "Gram flour flatbread cooked with mild spices.", price: "₹40", image: "https://images.unsplash.com/photo-1628296068228-5696d744b8bc?auto=format&fit=crop&q=80&w=800", category: "Breads" },

  // Rice & Biryani
  { id: "r1", name: "Veg Biryani", description: "Flavour packed rice with mixed vegetables and whole spices.", price: "₹265", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800", category: "Rice & Biryani" },
  { id: "r2", name: "Veg Mughlai Biryani", description: "Rich, aromatic biryani layered with veggies and spices.", price: "₹285", image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&q=80&w=800", category: "Rice & Biryani" },
  { id: "r3", name: "Jeera Rice", description: "Simple and comforting rice tempered with cumin.", price: "₹120", image: "https://images.unsplash.com/photo-1615486171448-4fd99479b183?auto=format&fit=crop&q=80&w=800", category: "Rice & Biryani" },
  { id: "r4", name: "Matar Pulao", description: "Long grain rice cooked with green peas and mild spices.", price: "₹150", image: "https://images.unsplash.com/photo-1580922820524-7622f9bc8e53?auto=format&fit=crop&q=80&w=800", category: "Rice & Biryani" },
  { id: "r5", name: "Paneer Pulao", description: "Paneer cubes and veggies tossed with seasoned rice.", price: "₹180", image: "https://images.unsplash.com/photo-1626804475297-41609ea5fc49?auto=format&fit=crop&q=80&w=800", category: "Rice & Biryani" },

  // Chinese
  { id: "c1", name: "Chilli Paneer", description: "Crispy paneer tossed in spicy Indo Chinese sauce.", price: "₹240", image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&q=80&w=800", category: "Chinese" },
  { id: "c2", name: "Manchurian", description: "Fried veggie ball in spicy garlic soy sauce.", price: "₹190", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&q=80&w=800", category: "Chinese" },
  { id: "c3", name: "Honey Chilli Potato", description: "Crispy potato fingers glazed with honey and chilli.", price: "₹225", image: "https://images.unsplash.com/photo-1644783305315-7489abfe4177?auto=format&fit=crop&q=80&w=800", category: "Chinese" },
  { id: "c4", name: "Hakka Noodles", description: "Classic Indo Chinese noodles with soy and veggies.", price: "₹170", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800", category: "Chinese" },
  { id: "c5", name: "Schezwan Noodles", description: "Noodles tossed in bold and spicy schezwan sauce.", price: "₹170", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=800", category: "Chinese" },
  { id: "c6", name: "Veg Noodles", description: "Stir fried noodles loaded with crunchy vegetables.", price: "₹155", image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800", category: "Chinese" },
  { id: "c7", name: "Fried Rice", description: "Wok tossed rice with veggies and soy based seasoning.", price: "₹185", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800", category: "Chinese" },
  { id: "c8", name: "Schezwan Rice", description: "Fiery rice tossed with schezwan sauce and veggies.", price: "₹195", image: "https://images.unsplash.com/photo-1563379926898-3bf294db43ee?auto=format&fit=crop&q=80&w=800", category: "Chinese" },

  // South Indian
  { id: "si1", name: "Masala Dosa", description: "Classic South Indian dosa stuffed with spiced potato mash.", price: "₹105", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800", category: "South Indian" },
  { id: "si2", name: "Paneer Dosa", description: "Dosa stuffed with spicy paneer bhurji.", price: "₹145", image: "https://images.unsplash.com/photo-1589301773112-0058ec30c04c?auto=format&fit=crop&q=80&w=800", category: "South Indian" },
  { id: "si3", name: "Onion Dosa", description: "Crisp dosa with finely chopped onion and masala.", price: "₹110", image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&q=80&w=800", category: "South Indian" },

  // Pizza & Pasta
  { id: "p1", name: "Margherita Pizza", description: "Cheesy tomato base on a crisp crust.", price: "₹220", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800", category: "Pizza & Pasta" },
  { id: "p2", name: "Green Wave Pizza", description: "Veg loaded pizza with a herby twist.", price: "₹245", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800", category: "Pizza & Pasta" },
  { id: "p3", name: "Alfredo Pasta", description: "Creamy white sauce pasta with herbs and veggies.", price: "₹140", image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&q=80&w=800", category: "Pizza & Pasta" },
  { id: "p4", name: "Arrabbiata Pasta", description: "Tangy red sauce pasta with a spicy punch.", price: "₹140", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=800", category: "Pizza & Pasta" },

  // Desserts
  { id: "d1", name: "Gulab Jamun", description: "Soft khoya ball soaked in warm sugar syrup.", price: "₹35", image: "https://images.unsplash.com/photo-1598971436154-18861df43477?auto=format&fit=crop&q=80&w=800", category: "Desserts" },
  { id: "d2", name: "Vanilla Ice Cream", description: "Classic vanilla scoop, creamy and cold.", price: "₹65", image: "https://images.unsplash.com/photo-1563805042-7684c8a9e9ce?auto=format&fit=crop&q=80&w=800", category: "Desserts" },
  { id: "d3", name: "Chocolate Ice Cream", description: "Rich chocolate scoop for dessert lovers.", price: "₹45", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800", category: "Desserts" },
  { id: "d4", name: "Butterscotch Ice Cream", description: "Crunchy caramel butterscotch in creamy base.", price: "₹80", image: "https://images.unsplash.com/photo-1570197781417-0c75c8ee5201?auto=format&fit=crop&q=80&w=800", category: "Desserts" },

  // Beverages
  { id: "bv1", name: "Chef Special Lassi", description: "Signature thick and creamy Punjabi lassi.", price: "₹95", image: "https://images.unsplash.com/photo-1571115177098-24deecd33026?auto=format&fit=crop&q=80&w=800", category: "Beverages" },
  { id: "bv2", name: "Virgin Mojito", description: "Lime, mint and fizz in a classic refreshing cooler.", price: "₹165", image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&q=80&w=800", category: "Beverages" },
  { id: "bv3", name: "Fresh Lime Soda", description: "Tangy lime soda served sweet/salted.", price: "₹85", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800", category: "Beverages" },
  { id: "bv4", name: "Mango Rapture", description: "Mango based mocktail with tropical flair.", price: "₹210", image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=800", category: "Beverages" },
  { id: "bv5", name: "Cold Coffee", description: "Chilled coffee shake topped with frothy cream.", price: "₹140", image: "https://images.unsplash.com/photo-1461023058943-07cb1ceac083?auto=format&fit=crop&q=80&w=800", category: "Beverages" },
  { id: "bv6", name: "Masala Chai", description: "Spiced Indian tea with bold Desi flavours.", price: "₹45", image: "https://images.unsplash.com/photo-1582299863486-13d80a373aeb?auto=format&fit=crop&q=80&w=800", category: "Beverages" }
];

export const reviews: Review[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    rating: 5,
    comment: "The Chicken Biryani is out of this world! Perfect blend of spices and tender chicken. Will definitely visit again.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "2",
    name: "Priya Patel",
    rating: 5,
    comment: "Excellent Paneer Butter Masala and amazing ambiance. The golden and dark theme of the restaurant is very luxurious.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: "3",
    name: "Amit Kumar",
    rating: 4,
    comment: "Great food and prompt service. The Veg Thali is highly recommended for a complete and satisfying meal.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=800",
];
