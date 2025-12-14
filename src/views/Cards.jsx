import PropertyCard from "../components/PropertyCard"
import { properties } from "../data/properties"

const CardsPage = () => (
  <section className="py-8 px-4 lg:px-8 bg-background">
    <div className="max-w-7xl mx-auto">
      <h2 className="font-serif text-3xl text-foreground mb-6">Property Cards Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {properties.map((p, i) => (
          <PropertyCard key={p.id} property={p} index={i} />
        ))}
      </div>
    </div>
  </section>
)

export default CardsPage
