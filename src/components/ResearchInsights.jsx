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
    <section className="py-14 px-4 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="font-serif text-3xl text-foreground">Research & Insights</h2>
          <p className="text-sm text-muted-foreground">Guides, market data and commentary to help you decide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleArticles.map((a) => (
            <article key={a.id} className="bg-card p-6 rounded-md shadow-sm">
              <h3 className="font-medium text-lg text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{a.excerpt}</p>
              <a href="#" className="text-sm text-accent hover:underline">Read more</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResearchInsights
