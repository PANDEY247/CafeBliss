import React from 'react'

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-5xl font-serif text-amber-900 mb-6">Our Story</h2>
          <p className="text-lg text-stone-700 leading-relaxed">
            Welcome to Cafe Bliss - your perfect destination for quality coffee, community, and comfort.
            We have been serving our community with passion and dedication, creating moments of bliss
            one cup at a time. Every beverage is crafted with care, using premium ingredients and
            traditional techniques.
          </p>
        </div>

        {/* Visual / Image */}
        <div className="relative">
          <div className="w-full h-64 bg-gradient-to-br from-amber-100 to-stone-200 
                          rounded-3xl flex items-center justify-center text-6xl">
            👨‍🍳👩‍🍳
          </div>
        </div>

      </div>
    </section>

  )
}

export default About
