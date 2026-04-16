export const menuCategories = [
  {
    name: 'Desi Classics',
    items: [
      { id: 'm1', name: 'Kacchi Biryani Royale', desc: 'Authentic dhaka style kacchi with tender mutton and baby potatoes', price: 450, rating: 4.9, img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80' },
      { id: 'm2', name: 'Shahi Mutton Tehari', desc: 'Flavorful mustard oil tehari packed with small beef chunks', price: 320, rating: 4.8, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80' },
      { id: 'm3', name: 'Old Dhaka Chicken Biryani', desc: 'Light, flavorful chicken biryani with boiled egg', price: 300, rating: 4.7, img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80' },
      { id: 'm4', name: 'Beef Vuna Khichuri', desc: 'Rainy day special vuna khichuri served with rich beef bhuna', price: 380, rating: 4.9, img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80' },
      { id: 'm5', name: 'Kala Bhuna & Paratha', desc: 'Slow-cooked dark, spicy beef with 2 flaky parathas', price: 420, rating: 4.8, img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80' },
    ]
  },
  {
    name: 'Fast Food',
    items: [
      { id: 'm6', name: 'The Wagyu Burger', desc: 'Premium wagyu beef, caramelized onions, truffle mayo', price: 650, rating: 5.0, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' },
      { id: 'm7', name: 'Classic Cheeseburger', desc: 'Double smash patty with cheddar and special house sauce', price: 350, rating: 4.6, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80' },
      { id: 'm8', name: 'Margherita Wood-fired Pizza', desc: 'Authentic Neapolitan crust with fresh basil and mozzarella', price: 550, rating: 4.8, img: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=400&q=80' },
      { id: 'm9', name: 'Pepperoni Feast Pizza', desc: 'Loaded with premium beef pepperoni and extra cheese', price: 650, rating: 4.7, img: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=400&q=80' },
    ]
  },
  {
    name: 'Snacks & Sides',
    items: [
      { id: 'm10', name: 'Spicy Fuchka Platter', desc: '10 crispy shells with spicy tamarind water, chickpea mash, and egg', price: 150, rating: 4.9, img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80' },
      { id: 'm11', name: 'Chotpoti Bowl', desc: 'Hot yellow pea soup topped with crunchy bits, fresh chilli and egg', price: 130, rating: 4.6, img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80' },
    ]
  },
  {
    name: 'Beverages',
    items: [
      { id: 'm12', name: 'Classic Borhani', desc: 'Traditional spiced yogurt drink with mint and coriander notes', price: 120, rating: 4.8, img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80' },
      { id: 'm13', name: 'Fresh Mint Lemonade', desc: 'Chilled sweet and sour lemonade with crushed mint', price: 100, rating: 4.7, img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80' },
    ]
  },
  {
    name: 'Desserts',
    items: [
      { id: 'm14', name: 'Dark Chocolate Fudge Cake', desc: 'Rich dark chocolate moist layered cake piece', price: 220, rating: 4.8, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80' },
      { id: 'm15', name: 'Red Velvet Slice', desc: 'Cream cheese frosted smooth red velvet sponge', price: 250, rating: 4.9, img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80' },
    ]
  }
];

export const allDishes = menuCategories.flatMap(c => c.items);
