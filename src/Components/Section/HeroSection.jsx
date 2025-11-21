import React from 'react'

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 text-center bg-amber-50 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-5xl font-extrabold mb-6 text-amber-900">Welcome to Cafe Bliss</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
Enjoy our premium coffe and snacks</p>
<button className="mt-8 px-8 py-3 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-all shadow-md">
        Explore Menu
      </button>
    </section>
  )
}

export default HeroSection;
