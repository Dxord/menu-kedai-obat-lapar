"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { menuData, MenuItem } from "@/data/menu";
import { ChevronDown, Instagram, MapPin } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const MenuItemCard = ({ item }: { item: MenuItem }) => (
  <motion.div
    variants={itemVariants}
    className="group relative overflow-hidden rounded-xl bg-slate-900/50 border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500"
  >
    <div className="absolute inset-0 z-0">
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
    </div>

    <div className="relative z-10 p-6 flex justify-between items-start gap-4">
      <div className="space-y-2">
        <h3 className="font-serif text-lg md:text-xl text-slate-200 group-hover:text-amber-400 transition-colors duration-300">
          {item.name}
        </h3>
        {item.description && (
          <p className="text-sm text-slate-400 font-light group-hover:text-slate-300 transition-colors">
            {item.description}
          </p>
        )}
      </div>
      <span className="font-serif text-amber-500 text-lg md:text-xl font-medium whitespace-nowrap bg-slate-950/50 px-3 py-1 rounded-full border border-amber-500/20 backdrop-blur-sm group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
        {item.price}
      </span>
    </div>
  </motion.div>
);

export default function Home() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu-section");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-slate-950 selection:bg-amber-500/30">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0" />
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 mix-blend-overlay" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex justify-center"
          >
            <div className="p-4 rounded-full border-2 border-amber-500/30 bg-slate-900/50 backdrop-blur-sm">
              <Image 
                src="/logo-gold.png" 
                alt="Kedai Obat Lapar Logo" 
                width={120} 
                height={120} 
                className="w-full h-full md:w-24 md:h-24 object-contain"
              />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 mb-6 drop-shadow-sm"
          >
            Kedai Obat Lapar
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 font-light tracking-wide mb-12"
          >
            Experience the Taste of Luxury
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            onClick={scrollToMenu}
            className="group relative px-8 py-3 bg-transparent border border-amber-500 text-amber-500 font-serif tracking-widest hover:bg-amber-500 hover:text-slate-950 transition-all duration-300"
          >
            VIEW MENU
            <span className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </span>
          </motion.button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu-section" className="py-20 px-4 md:px-8 bg-slate-950 relative">
        <div className="max-w-4xl mx-auto space-y-24">
          {menuData.map((category, index) => (
            <motion.div
              key={category.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="space-y-8"
            >
              <div className="text-center space-y-2">
                <h2 className="text-3xl md:text-4xl font-serif text-amber-400 relative inline-block pb-4">
                  {category.title}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-amber-500/50" />
                </h2>
              </div>

              {/* Direct Items */}
              {category.items && (
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                  {category.items.map((item, idx) => (
                    <MenuItemCard key={idx} item={item} />
                  ))}
                </div>
              )}

              {/* Subcategories */}
              {category.subcategories && (
                <div className="space-y-12">
                  {category.subcategories.map((sub, subIdx) => (
                    <div key={subIdx} className="space-y-6">
                      <h3 className="text-xl font-serif text-slate-300 border-l-2 border-amber-500 pl-4">
                        {sub.title}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                        {sub.items.map((item, idx) => (
                          <MenuItemCard key={idx} item={item} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Location & Social Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-900 relative border-t border-amber-500/10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-amber-400">
              Visit Us
            </h2>
            <p className="text-slate-400 font-light max-w-lg mx-auto">
              Come and taste the luxury. Find us at our location or follow our
              journey on social media.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Map Embed */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="w-full h-[300px] rounded-lg overflow-hidden border border-amber-500/20 shadow-lg shadow-amber-900/10"
            >
              <iframe
                src="https://maps.google.com/maps?q=-7.3730822,112.758919&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6 flex flex-col items-center md:items-start"
            >
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-xl font-serif text-slate-200 flex items-center gap-2 justify-center md:justify-start">
                  <MapPin className="text-amber-500" />
                  Location
                </h3>
                <a
                  href="https://www.google.com/maps/place/KEDAI+OBAT+LAPAR/@-7.3730822,112.758919,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7e50021c1da65:0x82334a4831847009!8m2!3d-7.3730822!4d112.758919!16s%2Fg%2F11mycybxzk?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-amber-400 transition-colors block"
                >
                  Kedai Obat Lapar
                  <br />
                  Click to open in Google Maps
                </a>
              </div>

              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-xl font-serif text-slate-200 flex items-center gap-2 justify-center md:justify-start">
                  <Instagram className="text-amber-500" />
                  Social Media
                </h3>
                <a
                  href="https://www.instagram.com/kedaiobatlapar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
                >
                  Follow @kedaiobatlapar
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 bg-black text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          {/* <Image 
            src="/logo-gold.png" 
            alt="Kedai Obat Lapar Logo" 
            width={64} 
            height={64} 
            className="w-16 h-16 mx-auto opacity-50 object-contain"
          /> */}
          <p className="font-serif text-slate-500">
            &copy; {new Date().getFullYear()} Kedai Obat Lapar. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
