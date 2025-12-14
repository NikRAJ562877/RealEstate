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
      className={`group cursor-pointer bg-card rounded-md overflow-hidden shadow-sm ${compact ? "flex gap-4 items-stretch h-full" : ""}`}
      onClick={() => navigate(`/property/${property.id}`)}
    >
      {/* Image */}
      <div className={`${compact ? "w-1/3" : "h-72"} relative overflow-hidden`}>
        <motion.img
          src={property.image}
          alt={property.title}
          className={`w-full h-full object-cover ${compact ? "h-full" : ""}`}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {property.badges?.slice(0, 2).map((b, i) => (
            <Badge key={i}>{b}</Badge>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className={`p-4 flex-1 ${compact ? "py-3" : ""}`}>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg text-foreground line-clamp-2">{property.title}</h3>
          <div className="text-right">
            <div className="text-xl font-serif text-accent">{property.price}</div>
            <div className="text-sm text-muted-foreground">{property.pricePerSqft || ""}</div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
          <MapPin size={14} strokeWidth={1.5} />
          <span>{property.location}</span>
        </div>

        <div className="flex items-center gap-6 mt-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Bed size={16} />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Square size={16} />
            <span>{property.size}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mt-3 line-clamp-3">{property.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={property.agentAvatar || "/placeholder-user.jpg"} alt="agent" className="w-8 h-8 rounded-full" />
            <div className="text-sm">
              <div className="font-medium text-foreground">{property.agent || "Agent"}</div>
              <div className="text-muted-foreground">{property.listedAgo || "2 days ago"}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 bg-accent text-accent-foreground rounded-md text-sm">
              Contact
            </button>
            <div className="text-accent flex items-center gap-1">
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
