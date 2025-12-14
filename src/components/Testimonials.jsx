"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Homeowner",
    content:
      "Estate helped us find our dream home. Their attention to detail and understanding of our needs made the entire process seamless and enjoyable.",
    location: "Beverly Hills, CA",
  },
  {
    id: 2,
    name: "James Patterson",
    role: "Investment Client",
    content:
      "Outstanding professionalism and market knowledge. They guided us through multiple property investments with exceptional expertise and care.",
    location: "Manhattan, NY",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "First-Time Buyer",
    content:
      "As a first-time buyer, I was overwhelmed. Estate made everything simple and transparent. I couldn't be happier with my new home.",
    location: "Miami, FL",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Property Seller",
    content:
      "Sold our property above asking price in record time. Their marketing strategy and negotiation skills are truly world-class.",
    location: "San Francisco, CA",
  },
]

const Testimonials = () => {
  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth)
    }
  }, [])

  return (
    <section id="testimonials" className="py-24 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">Client Experiences</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Hear from those who trusted us with their most important investment
          </p>
        </motion.div>
      </div>

      <div className="px-6 lg:px-8">
        <InfiniteMovingCards
          items={testimonials.map((t) => ({ quote: t.content, name: t.name, title: t.role }))}
          direction="left"
          speed="normal"
          className="mt-6"
        />
      </div>
    </section>
  )
}

export default Testimonials
