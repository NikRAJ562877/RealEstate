"use client"
import { useNavigate, Link } from "react-router-dom"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid"
import { properties as allProperties } from "../data/properties"

const NewlyAddedProperties = () => {
  const navigate = useNavigate()
  const newest = allProperties.slice(0, 6)

  return (
    <section className="py-20 px-4 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-white">Newly-added properties</h2>
            <p className="text-sm text-white/70 mt-2">Fresh listings curated for discerning buyers</p>
          </div>
          <Link to="/listings" className="hidden md:inline-flex text-sm text-white/80 hover:underline">View all listings</Link>
        </div>

        <BentoGrid>
          {newest.map((p, i) => {
            // create a bento mosaic: make the first item larger
            const spanClass = i === 0 ? "md:row-span-2 md:col-span-2" : i === 1 ? "md:row-span-2 md:col-span-1" : "md:row-span-1"
            return (
              <div key={p.id} onClick={() => navigate(`/property/${p.id}`)} className={`cursor-pointer ${spanClass}`}>
                <BentoGridItem
                  className="h-full"
                  header={
                    <div className="h-56 md:h-full w-full overflow-hidden rounded-xl relative">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent rounded-xl" />
                    </div>
                  }
                  title={<div className="text-base md:text-lg font-medium text-white">{p.title}</div>}
                  description={<span className="text-sm text-white/70">{p.price} • {p.beds} Beds • {p.size}</span>}
                />
              </div>
            )
          })}
        </BentoGrid>
      </div>
    </section>
  )
}

export default NewlyAddedProperties
