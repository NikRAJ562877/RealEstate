"use client"

import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ChevronLeft, ChevronRight, Bed, Bath, Square, MapPin, Calendar } from "lucide-react"
import {
  ExpandableScreen,
  ExpandableScreenTrigger,
  ExpandableScreenContent,
} from "../../components/ui/expandable-screen"
import { properties } from "../data/properties"

const PropertyDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const property = properties.find((p) => p.id === Number.parseInt(id))
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  if (!property) {
    return <div className="min-h-screen flex items-center justify-center">Property not found</div>
  }

  const BookingForm = ({ property }) => {
    const [state, setState] = useState("idle")
    const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", notes: "" })

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
      e.preventDefault()
      setState("loading")
      setTimeout(() => {
        setState("success")
        setTimeout(() => {
          setState("idle")
          setForm({ name: "", email: "", phone: "", date: "", time: "", notes: "" })
        }, 2200)
      }, 900)
    }

    return (
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <h3 className="font-serif text-2xl mb-4">Book a viewing — {property.title}</h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="text-sm text-white/80 mb-1 block">Full name</label>
            <input name="name" required value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white text-black" />
          </div>
          <div>
            <label className="text-sm text-white/80 mb-1 block">Email</label>
            <input name="email" type="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white text-black" />
          </div>
          <div>
            <label className="text-sm text-white/80 mb-1 block">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white text-black" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-white/80 mb-1 block">Preferred date</label>
              <input name="date" type="date" value={form.date} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-white text-black" />
            </div>
            <div>
              <label className="text-sm text-white/80 mb-1 block">Time slot</label>
              <select name="time" value={form.time} onChange={handleChange} className="w-full px-3 py-2 rounded-lg bg-white text-black">
                <option value="">Choose a slot</option>
                <option>09:00 - 10:00</option>
                <option>10:00 - 11:00</option>
                <option>11:00 - 12:00</option>
                <option>14:00 - 15:00</option>
                <option>16:00 - 17:00</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm text-white/80 mb-1 block">Notes</label>
            <textarea name="notes" rows={3} value={form.notes} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white text-black" />
          </div>

          <div>
            <button disabled={state !== "idle"} type="submit" className="w-full bg-accent text-accent-foreground py-3 rounded-full font-medium">
              {state === "idle" && "Request slot"}
              {state === "loading" && "Sending..."}
              {state === "success" && "Requested"}
            </button>
          </div>
        </div>
      </form>
    )
  }

  const images = [property.image, property.image, property.image]

  const nextImage = () => {
    setDirection(1)
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setDirection(-1)
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-150"
        >
          <ArrowLeft size={20} strokeWidth={1.5} />
          <span>Back to Properties</span>
        </motion.button>
      </div>

      <div className="relative h-[60vh] overflow-hidden bg-black">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`${property.title} - Image ${currentImageIndex + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <button
          onClick={prevImage}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors duration-150 flex items-center justify-center"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors duration-150 flex items-center justify-center"
          aria-label="Next image"
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-150 ${
                index === currentImageIndex ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">{property.title}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={20} strokeWidth={1.5} />
                    <span className="text-lg">{property.location}</span>
                  </div>
                </div>
                <div className="font-serif text-3xl text-accent">{property.price}</div>
              </div>

              <div className="flex flex-wrap gap-8 py-8 border-y border-border mb-8">
                <div className="flex items-center gap-3">
                  <Bed size={24} strokeWidth={1.5} className="text-accent" />
                  <div>
                    <div className="text-2xl font-serif text-foreground">{property.beds}</div>
                    <div className="text-sm text-muted-foreground">Bedrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Bath size={24} strokeWidth={1.5} className="text-accent" />
                  <div>
                    <div className="text-2xl font-serif text-foreground">{property.baths || 3}</div>
                    <div className="text-sm text-muted-foreground">Bathrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Square size={24} strokeWidth={1.5} className="text-accent" />
                  <div>
                    <div className="text-2xl font-serif text-foreground">{property.size}</div>
                    <div className="text-sm text-muted-foreground">Square Feet</div>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="font-serif text-2xl text-foreground mb-4">About This Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{property.description}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This exceptional residence offers an unparalleled lifestyle, combining timeless elegance with modern
                  sophistication. Every detail has been carefully considered to create a harmonious living environment
                  that exudes luxury and comfort.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Located in one of the most prestigious neighborhoods, this property provides convenient access to fine
                  dining, shopping, and entertainment while maintaining the privacy and tranquility you deserve.
                </p>
              </div>

              <div className="mt-12">
                <h2 className="font-serif text-2xl text-foreground mb-6">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Gourmet chef's kitchen",
                    "Master suite with spa bathroom",
                    "Private outdoor space",
                    "Smart home technology",
                    "High-end appliances",
                    "Custom finishes throughout",
                    "Ample natural light",
                    "Premium hardwood floors",
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="sticky top-24 bg-card p-8 border border-border"
            >
              <h3 className="font-serif text-2xl text-foreground mb-6">Schedule a Visit</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Experience this exceptional property in person. Contact us to arrange a private viewing.
              </p>
              <ExpandableScreen>
                <ExpandableScreenTrigger>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-accent text-accent-foreground py-4 text-sm tracking-wider uppercase font-medium hover:bg-accent/90 transition-all duration-150 flex items-center justify-center gap-3 mb-4"
                  >
                    <Calendar size={18} strokeWidth={2} />
                    Book Viewing
                  </motion.button>
                </ExpandableScreenTrigger>

                <ExpandableScreenContent
                  className="bg-neutral-900 text-white p-6 md:p-10 rounded-2xl max-w-2xl mx-auto"
                  closeButtonClassName="text-white bg-transparent hover:bg-white/5"
                  showCloseButton
                >
                  <BookingForm property={property} />
                </ExpandableScreenContent>
              </ExpandableScreen>
              <button className="w-full border border-border text-foreground py-4 text-sm tracking-wider uppercase font-medium hover:bg-muted transition-all duration-150">
                Request Information
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails
