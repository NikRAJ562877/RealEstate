import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./views/HomePage"
import PropertyDetails from "./views/PropertyDetails"
import ListingsPage from "./views/Listings"
import CardsPage from "./views/Cards"
import ContactPage from "./views/Contact"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
