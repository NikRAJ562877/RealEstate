"use client"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { Bed, Square, MapPin, ArrowRight } from "lucide-react"

const Badge = ({ children, color = "bg-accent/10 text-accent" }) => (
  <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${color}`}>{children}</span>
)

const PropertyCard = ({ property, index, compact = false }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
  className={`group cursor-pointer glass-card rounded-xl overflow-hidden shadow-lg ${compact ? "flex gap-6 items-stretch h-full" : ""}`}
      onClick={() => navigate(`/property/${property.id}`)}
    >
      {/* Image */}
      <div className={`${compact ? "w-1/3" : "h-80"} relative overflow-hidden`}>
        <motion.img
          src={property.image}
          alt={property.title}
          className={`w-full h-full object-cover ${compact ? "h-full" : ""}`}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {property.badges?.slice(0, 2).map((b, i) => (
            <Badge key={i} color="bg-white/10 text-white">{b}</Badge>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={`p-5 flex-1 ${compact ? "py-4" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-semibold text-lg text-white line-clamp-2">{property.title}</h3>
          <div className="text-right">
            <div className="text-2xl font-serif text-white">{property.price}</div>
            <div className="text-sm text-white/70">{property.pricePerSqft || ""}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-white/70 mt-2">
          <MapPin size={14} strokeWidth={1.5} />
          <span>{property.location}</span>
        </div>

        <div className="flex items-center gap-6 mt-3 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <Bed size={16} />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Square size={16} />
            <span>{property.size}</span>
          </div>
        </div>

        <p className="text-sm text-white/70 mt-3 line-clamp-3">{property.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={property.agentAvatar || "/placeholder-user.jpg"} alt="agent" className="w-10 h-10 rounded-full border border-white/6" />
            <div className="text-sm">
              <div className="font-medium text-white">{property.agent || "Agent"}</div>
              <div className="text-white/70">{property.listedAgo || "2 days ago"}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm font-medium">Contact</button>
            <div className="text-white/90 flex items-center gap-1">
              <span className="text-sm font-medium">View</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PropertyCard
