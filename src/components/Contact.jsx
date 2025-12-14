"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Check, Zap } from "lucide-react"
import {
  ExpandableScreen,
  ExpandableScreenTrigger,
  ExpandableScreenContent,
} from "../../components/ui/expandable-screen"

const ContactForm = () => {
  const [formState, setFormState] = useState("idle") // idle, loading, success
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState("loading")
    setTimeout(() => {
      setFormState("success")
      setTimeout(() => {
        setFormState("idle")
        setFormData({ name: "", email: "", phone: "", message: "" })
      }, 2500)
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-serif text-5xl md:text-6xl mb-6">Reserve your spot</h3>

            <div className="space-y-4 text-sm text-gray-200 mb-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-neutral-800">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p>Get priority access to new listings and updates before public release.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-neutral-800">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p>Join a community of early adopters and influence what we build next.</p>
                </div>
              </div>
            </div>

            <hr className="border-t border-neutral-800 my-6" />

            <div className="text-gray-200 text-lg leading-relaxed mb-6">
              The waitlist has been a game-changer for our workflow. Highly recommend joining early.
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <div className="h-12 w-12 rounded-full bg-white/5 border border-white/8" />
            <div>
              <div className="font-medium">Alex Rivera</div>
              <div className="text-sm text-gray-400">Early Access Member</div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs text-gray-300 mb-2 uppercase tracking-wider">FULL NAME *</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-full bg-white text-black placeholder:text-gray-400 text-sm shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs text-gray-300 mb-2 uppercase tracking-wider">EMAIL *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-full bg-white text-black placeholder:text-gray-400 text-sm shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="usecase" className="block text-xs text-gray-300 mb-2 uppercase tracking-wider">USE CASE</label>
              <input
                id="usecase"
                name="usecase"
                type="text"
                value={formData.usecase || ""}
                onChange={(e) => setFormData({ ...formData, usecase: e.target.value })}
                placeholder="e.g., Buying, Renting, Investing"
                className="w-full px-6 py-3 rounded-full bg-white text-black placeholder:text-gray-400 text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs text-gray-300 mb-2">WHAT ARE YOU MOST EXCITED ABOUT?</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what features you're looking forward to..."
                className="w-full px-6 py-4 rounded-2xl bg-white text-black placeholder:text-gray-400 resize-none text-sm leading-relaxed"
              />
            </div>

            <motion.button
              type="submit"
              disabled={formState !== "idle"}
              whileHover={formState === "idle" ? { scale: 1.01 } : {}}
              whileTap={formState === "idle" ? { scale: 0.995 } : {}}
              className="mt-6 w-full bg-white text-black py-4 rounded-full font-semibold flex items-center justify-center shadow-md"
            >
              <AnimatePresence mode="wait">
                {formState === "idle" && <span>Join waitlist</span>}
                {formState === "loading" && (
                  <motion.div
                    key="loading"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                  />
                )}
                {formState === "success" && (
                  <span className="flex items-center gap-2">Added <Check size={16} /></span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.form>
  )
}

const Contact = () => {
  return (
    <ExpandableScreen>
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

          <div className="text-center mb-8">
            <ExpandableScreenTrigger>
              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
              >
                Contact us
              </button>
            </ExpandableScreenTrigger>
          </div>

          <ExpandableScreenContent
            className="bg-neutral-900 text-white p-6 md:p-12 rounded-none md:rounded-2xl max-w-6xl mx-auto"
            closeButtonClassName="text-white bg-transparent hover:bg-white/5"
            showCloseButton
          >
            <ContactForm />
          </ExpandableScreenContent>
        </div>
      </section>
    </ExpandableScreen>
  )
}

export { ContactForm }
export default Contact
