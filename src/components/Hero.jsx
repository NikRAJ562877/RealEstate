"use client"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Hero = () => {
  const navigate = useNavigate()
  const scrollToProperties = () => {
    // listings moved to a dedicated page — navigate there
    navigate("/listings")
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/luxury-modern-architecture-home-exterior.jpg" alt="Luxury home" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Exceptional Living Spaces
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Discover meticulously curated properties that redefine luxury and sophistication
          </motion.p>

          <motion.button
            onClick={scrollToProperties}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-accent-foreground px-10 py-4 text-sm tracking-wider uppercase font-medium hover:bg-accent/90 transition-all duration-150"
          >
            Explore Properties
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToProperties}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 0.5 },
          y: { repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" },
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </motion.button>
    </section>
  )
}

export default Hero
