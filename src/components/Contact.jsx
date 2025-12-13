"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Check } from "lucide-react"

const Contact = () => {
  const [formState, setFormState] = useState("idle") // idle, loading, success
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState("loading")

    // Simulate form submission
    setTimeout(() => {
      setFormState("success")
      setTimeout(() => {
        setFormState("idle")
        setFormData({ name: "", email: "", phone: "", message: "" })
      }, 3000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-muted">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6">Begin Your Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help you find your perfect property
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          onSubmit={handleSubmit}
          className="bg-card p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors duration-150"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors duration-150"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors duration-150"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-accent transition-colors duration-150 resize-none"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={formState !== "idle"}
            whileHover={formState === "idle" ? { scale: 1.02 } : {}}
            whileTap={formState === "idle" ? { scale: 0.98 } : {}}
            className="w-full bg-accent text-accent-foreground py-4 text-sm tracking-wider uppercase font-medium hover:bg-accent/90 transition-all duration-150 flex items-center justify-center gap-3 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState === "idle" && (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-3"
                >
                  Send Message
                  <Send size={18} strokeWidth={2} />
                </motion.span>
              )}
              {formState === "loading" && (
                <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-5 h-5 border-2 border-accent-foreground border-t-transparent rounded-full"
                  />
                </motion.span>
              )}
              {formState === "success" && (
                <motion.span
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3"
                >
                  Message Sent
                  <Check size={18} strokeWidth={2} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
