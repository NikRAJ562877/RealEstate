"use client"
import { useNavigate } from "react-router-dom"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid"
import { properties as allProperties } from "../data/properties"

const NewlyAddedProperties = () => {
  const navigate = useNavigate()
  const newest = allProperties.slice(0, 6)

  return (
    <section className="py-16 px-4 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Newly-added properties</h2>
            <p className="text-sm text-muted-foreground mt-1">Fresh listings added to the market — updated regularly</p>
          </div>
          <a href="/listings" className="hidden md:inline-flex text-sm text-accent hover:underline">View all listings</a>
        </div>

        <BentoGrid>
          {newest.map((p) => (
            <div key={p.id} onClick={() => navigate(`/property/${p.id}`)} className="cursor-pointer">
              <BentoGridItem
                header={
                  <div className="h-44 w-full overflow-hidden rounded-md">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                }
                title={<div className="text-sm md:text-base">{p.title}</div>}
                description={<span>{p.price} • {p.beds} Beds • {p.size}</span>}
              />
            </div>
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

export default NewlyAddedProperties
