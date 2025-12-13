"use client"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Shield, TrendingUp, Users } from "lucide-react"

const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Award,
      number: 250,
      suffix: "+",
      label: "Properties Sold",
      description: "Successfully closed deals with satisfied clients",
    },
    {
      icon: Users,
      number: 98,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations",
    },
    {
      icon: TrendingUp,
      number: 15,
      suffix: " Years",
      label: "Market Experience",
      description: "Deep understanding of luxury real estate",
    },
    {
      icon: Shield,
      number: 100,
      suffix: "%",
      label: "Trusted Service",
      description: "Complete transparency in every transaction",
    },
  ]

  return (
    <section id="why-choose-us" ref={ref} className="py-24 px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6">Why Choose Estate</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We bring unparalleled expertise and dedication to help you find your perfect home
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ValueCard = ({ value, index, isInView }) => {
  const [count, setCount] = useState(0)
  const Icon = value.icon

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value.number / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value.number) {
        setCount(value.number)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value.number])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-center"
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
          <Icon size={28} className="text-accent" strokeWidth={1.5} />
        </div>
      </div>

      <div className="font-serif text-5xl text-foreground mb-2">
        {count}
        {value.suffix}
      </div>

      <h3 className="text-xl font-medium text-foreground mb-2">{value.label}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
    </motion.div>
  )
}

export default WhyChooseUs
