const sellers = [
  { id: 1, name: "Amit Sharma", avatar: "/placeholder-user.jpg", agency: "Prime Estates", rating: 4.8 },
  { id: 2, name: "Rina Kapoor", avatar: "/placeholder-user.jpg", agency: "Urban Realty", rating: 4.6 },
  { id: 3, name: "Vikram Singh", avatar: "/placeholder-user.jpg", agency: "Coastal Homes", rating: 4.7 },
]

const RecommendedSellers = () => {
  return (
    <section className="py-14 px-4 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-3xl text-foreground">Recommended sellers</h2>
            <p className="text-sm text-muted-foreground">Trusted sellers and agents you can contact</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {sellers.map((s) => (
            <div key={s.id} className="bg-card p-4 rounded-md flex items-center gap-4">
              <img src={s.avatar} alt={s.name} className="w-14 h-14 rounded-full" />
              <div>
                <div className="font-medium text-foreground">{s.name}</div>
                <div className="text-sm text-muted-foreground">{s.agency}</div>
                <div className="text-sm text-accent mt-2">Rating: {s.rating}</div>
              </div>
              <div className="ml-auto">
                <button className="px-3 py-2 bg-accent text-accent-foreground rounded-md text-sm">Contact</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecommendedSellers
