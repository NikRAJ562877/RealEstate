"use client"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Bed, Square, MapPin, ArrowRight } from "lucide-react"

const PropertyCard = ({ property, index }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="group cursor-pointer"
      onClick={() => navigate(`/property/${property.id}`)}
    >
      <div className="relative overflow-hidden bg-card h-full">
        {/* Image */}
        <motion.div className="relative h-80 overflow-hidden" whileHover={{ scale: 1 }} transition={{ duration: 0.15 }}>
          <motion.img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 bg-black/10"
          />
        </motion.div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-serif text-2xl text-foreground">{property.title}</h3>
            <span className="font-serif text-xl text-accent">{property.price}</span>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <MapPin size={16} strokeWidth={1.5} />
            <span className="text-sm">{property.location}</span>
          </div>

          <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Bed size={18} strokeWidth={1.5} />
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center gap-2">
              <Square size={18} strokeWidth={1.5} />
              <span>{property.size}</span>
            </div>
          </div>

          {/* CTA Reveal */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileHover={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-2 text-accent text-sm font-medium pt-2 border-t border-border">
              <span>View Details</span>
              <ArrowRight size={16} strokeWidth={2} />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default PropertyCard
