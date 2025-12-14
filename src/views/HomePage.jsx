import Hero from "../components/Hero"
import NewlyAddedProperties from "../components/NewlyAddedProperties"
import ResearchInsights from "../components/ResearchInsights"
import RecommendedSellers from "../components/RecommendedSellers"
import WhyChooseUs from "../components/WhyChooseUs"
import Testimonials from "../components/Testimonials"

const HomePage = () => {
  return (
    <>
      <Hero />

      {/* Homepage-only sections */}
      <NewlyAddedProperties />
      <ResearchInsights />
      <RecommendedSellers />

      <WhyChooseUs />
      <Testimonials />
    </>
  )
}

export default HomePage
