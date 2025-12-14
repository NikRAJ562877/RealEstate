"use client"
import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import PropertyCard from "./PropertyCard"
import { properties as allProperties } from "../data/properties"

const Filters = ({ filters, setFilters }) => {
  return (
    <div className="space-y-4 p-4">
      <div>
        <label className="block text-sm text-white/80 mb-1">Keyword</label>
        <input
          value={filters.q}
          onChange={(e) => setFilters((s) => ({ ...s, q: e.target.value }))}
          className="w-full bg-neutral-700 border border-white/8 rounded-full px-4 py-3 text-sm text-white placeholder:text-white/60 transition-transform transform-gpu focus:scale-[1.01] focus:shadow-glow"
          placeholder="e.g. 2 BHK, Garden"
        />
      </div>

      <div>
        <label className="block text-sm text-white/80 mb-1">Min Beds</label>
        <select
          value={filters.beds}
          onChange={(e) => setFilters((s) => ({ ...s, beds: Number(e.target.value) }))}
          className="w-full bg-neutral-700 border border-white/8 rounded-full px-4 py-3 text-sm text-white transition-transform transform-gpu focus:scale-[1.01]"
        >
          <option value={0}>Any</option>
          <option value={1}>1+</option>
          <option value={2}>2+</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-white/80 mb-1">Sort</label>
        <select
          value={filters.sort}
          onChange={(e) => setFilters((s) => ({ ...s, sort: e.target.value }))}
          className="w-full bg-neutral-700 border border-white/8 rounded-full px-4 py-3 text-sm text-white transition-transform transform-gpu focus:scale-[1.01]"
        >
          <option value="newest">Newest</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="price_asc">Price: Low to High</option>
        </select>
      </div>
    </div>
  )
}

const PropertyListings = () => {
  const [filters, setFilters] = useState({ q: "", beds: 0, sort: "newest" })

  const properties = useMemo(() => {
    let list = allProperties.slice()
    if (filters.q) {
      const q = filters.q.toLowerCase()
      list = list.filter((p) => p.title.toLowerCase().includes(q) || p.location.toLowerCase().includes(q))
    }
    if (filters.beds > 0) list = list.filter((p) => Number(p.beds) >= filters.beds)
    if (filters.sort === "price_desc") list.sort((a, b) => Number(b.price.replace(/[^0-9]/g, "")) - Number(a.price.replace(/[^0-9]/g, "")))
    if (filters.sort === "price_asc") list.sort((a, b) => Number(a.price.replace(/[^0-9]/g, "")) - Number(b.price.replace(/[^0-9]/g, "")))
    return list
  }, [filters])

  return (
    <section className="py-16 px-4 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="font-serif text-4xl text-white">Properties — Results</h2>
          <p className="text-sm text-white/70">Browse curated listings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-neutral-800 border border-white/6 rounded-xl p-4">
              <h4 className="px-1 py-2 font-medium text-white">Filters</h4>
              <Filters filters={filters} setFilters={setFilters} />
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-6">
              {properties.map((property, index) => (
                <PropertyCard key={property.id} property={property} index={index} compact />
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}

export default PropertyListings
