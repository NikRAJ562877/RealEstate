"use client"
import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import PropertyCard from "./PropertyCard"
import { properties as allProperties } from "../data/properties"

const Filters = ({ filters, setFilters }) => {
  return (
    <div className="space-y-4 p-4">
      <div>
        <label className="block text-sm text-muted-foreground mb-1">Keyword</label>
        <input
          value={filters.q}
          onChange={(e) => setFilters((s) => ({ ...s, q: e.target.value }))}
          className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm"
          placeholder="e.g. 2 BHK, Garden"
        />
      </div>

      <div>
        <label className="block text-sm text-muted-foreground mb-1">Min Beds</label>
        <select value={filters.beds} onChange={(e) => setFilters((s) => ({ ...s, beds: Number(e.target.value) }))} className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm">
          <option value={0}>Any</option>
          <option value={1}>1+</option>
          <option value={2}>2+</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
        </select>
      </div>

      <div>
        <label className="block text-sm text-muted-foreground mb-1">Sort</label>
        <select value={filters.sort} onChange={(e) => setFilters((s) => ({ ...s, sort: e.target.value }))} className="w-full bg-card border border-border rounded-md px-3 py-2 text-sm">
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
    <section className="py-14 px-4 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="font-serif text-3xl text-foreground">Properties — Results</h2>
          <p className="text-sm text-muted-foreground">Browse your best house</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-card border border-border rounded-md">
              <h4 className="px-4 py-3 font-medium">Filters</h4>
              <Filters filters={filters} setFilters={setFilters} />
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-4">
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
