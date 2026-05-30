import { motion, AnimatePresence } from 'motion/react';
import { menuItems as initialMenuItems } from '../data';
import { ShoppingBag, Plus, X, Image as ImageIcon } from 'lucide-react';
import { useState, useRef } from 'react';

export default function MenuSection() {
  const [items, setItems] = useState(initialMenuItems);
  const categories = ["All", ...new Set(items.map(item => item.category))];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const filteredItems = activeCategory === "All" 
    ? items 
    : items.filter(item => item.category === activeCategory);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewItem({ ...newItem, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.name || !newItem.price) return;

    const itemToAdd = {
      ...newItem,
      id: `custom-${Date.now()}`,
      category: newItem.category || "Specials",
      image: newItem.image || "https://images.unsplash.com/photo-1546833999-b14e3d5be7fa?auto=format&fit=crop&q=80&w=800"
    };

    setItems([itemToAdd, ...items]);
    setIsModalOpen(false);
    setNewItem({ name: '', price: '', description: '', category: '', image: '' });
  };

  return (
    <section id="menu" className="py-24 bg-zinc-900 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-custom font-medium tracking-widest uppercase text-sm mb-2"
          >
            Discover
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            Shyam Darbar Specials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto mb-8"
          >
            Explore our crafted selection of royal Indian delicacies, from sizzling starters to authentic main courses.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-gold-custom hover:text-zinc-950 text-white font-medium rounded-full transition-all duration-300 border border-white/10 shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Add Custom Item
          </motion.button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gold-custom text-zinc-950 shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                  : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 border border-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-zinc-950 rounded-2xl overflow-hidden border border-white/5 hover:border-gold-custom/50 transition-all group flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
                  <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-gold-custom font-medium text-xs tracking-wider uppercase">{item.category}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end gap-4">
                    <h3 className="text-2xl font-display font-bold text-white drop-shadow-md leading-tight">{item.name}</h3>
                    <span className="text-lg font-bold text-black bg-gold-custom px-3 py-1 rounded-lg shrink-0 shadow-lg">{item.price}</span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed">
                    {item.description}
                  </p>
                  
                  <button className="w-full py-3 rounded-xl border border-gold-custom/30 text-gold-custom font-medium flex items-center justify-center gap-2 hover:bg-gold-custom hover:text-zinc-950 transition-all duration-300 group/btn">
                    <ShoppingBag className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                    Order Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Add Custom Item Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-zinc-900 border border-white/10 p-6 sm:p-8 rounded-2xl w-full max-w-lg shadow-2xl relative"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-display font-bold text-white mb-6">Add Menu Item</h3>
              
              <form onSubmit={handleAddItem} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">Item Name</label>
                  <input
                    type="text"
                    required
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-custom transition-colors"
                    placeholder="e.g. Royal Paneer"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">Price</label>
                    <input
                      type="text"
                      required
                      value={newItem.price}
                      onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-custom transition-colors"
                      placeholder="e.g. ₹250"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-1">Category</label>
                    <input
                      type="text"
                      value={newItem.category}
                      onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-custom transition-colors"
                      placeholder="e.g. Specials"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">Description</label>
                  <textarea
                    rows={2}
                    value={newItem.description}
                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                    className="w-full bg-zinc-950 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-custom transition-colors resize-none"
                    placeholder="Brief description of the dish..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-1">Photo</label>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="flex bg-zinc-950 items-center justify-center gap-2 border border-dashed border-white/20 hover:border-gold-custom/50 rounded-xl px-4 py-3 text-zinc-400 hover:text-gold-custom transition-all w-full"
                    >
                      <ImageIcon className="w-5 h-5" />
                      {newItem.image ? 'Change Photo' : 'Upload Photo'}
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                  {newItem.image && (
                    <div className="mt-4 relative rounded-xl overflow-hidden h-32 border border-white/10">
                      <img src={newItem.image} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-custom hover:bg-gold-custom/90 text-zinc-950 font-bold py-3 px-4 rounded-xl shadow-lg transition-all pt-4 mt-6"
                >
                  Add Item to Menu
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
