const sellers = [
  { id: 1, name: "Amit Sharma", avatar: "/placeholder-user.jpg", agency: "Prime Estates", rating: 4.8 },
  { id: 2, name: "Rina Kapoor", avatar: "/placeholder-user.jpg", agency: "Urban Realty", rating: 4.6 },
  { id: 3, name: "Vikram Singh", avatar: "/placeholder-user.jpg", agency: "Coastal Homes", rating: 4.7 },
]

const RecommendedSellers = () => {
  return (
    <section className="py-14 px-4 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-white">Recommended sellers</h2>
            <p className="text-sm text-white/70">Trusted sellers and agents you can contact</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {sellers.map((s) => (
            <div key={s.id} className="glass-card p-6 rounded-xl flex items-center gap-4">
              <img src={s.avatar} alt={s.name} className="w-16 h-16 rounded-full border border-white/8" />
              <div>
                <div className="font-medium text-white">{s.name}</div>
                <div className="text-sm text-white/70">{s.agency}</div>
                <div className="text-sm text-white/80 mt-2">Rating: <span className="text-accent">{s.rating}</span></div>
              </div>
              <div className="ml-auto">
                <button className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium">Contact</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecommendedSellers
