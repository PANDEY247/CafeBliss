import React from "react";

// Gallery Section Component
const Gallery = () => {
  // You can replace these emojis with actual image URLs later
  const galleryItems = ["☕", "🥐", "🍰", "🪑", "🍵", "🌯", "⭐", "🥯"];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-5xl font-serif text-amber-900 mb-12 text-center">
        Gallery
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="aspect-square bg-gradient-to-br from-amber-100 to-stone-200 rounded-2xl
                       flex items-center justify-center text-6xl 
                       hover:scale-105 hover:shadow-lg transition-transform cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
