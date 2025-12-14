const sampleArticles = [
  {
    id: 1,
    title: "Market update: Where prices are heading",
    excerpt: "A short summary of recent price movement and what buyers should expect in the next quarter.",
  },
  {
    id: 2,
    title: "Neighborhood guide: Best suburbs for families",
    excerpt: "We look at schools, commute times and amenities to find family-friendly neighbourhoods.",
  },
  {
    id: 3,
    title: "How to evaluate a property's ROI",
    excerpt: "A practical checklist for investors to assess rental yield and long-term returns.",
  },
]

const ResearchInsights = () => {
  return (
    <section className="py-14 px-4 lg:px-8 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="font-serif text-3xl md:text-4xl text-white">Research & Insights</h2>
          <p className="text-sm text-white/70">Guides, market data and commentary to help you decide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleArticles.map((a) => (
            <article key={a.id} className="glass-card p-6 rounded-xl hover:shadow-xl transition-shadow">
              <h3 className="font-medium text-lg text-white mb-2">{a.title}</h3>
              <p className="text-sm text-white/70 mb-4 line-clamp-3">{a.excerpt}</p>
              <a href="#" className="text-sm text-white hover:underline">Read more</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResearchInsights
