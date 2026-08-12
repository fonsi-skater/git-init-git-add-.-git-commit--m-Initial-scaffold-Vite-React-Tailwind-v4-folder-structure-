import { Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar.jsx"
import Hero from "./components/sections/Hero.jsx"
import MyStory from "./components/sections/MyStory.jsx"
import PathToMastery from "./components/sections/PathToMastery.jsx"
import SelectedWorks from "./components/sections/SelectedWorks.jsx"
import Services from "./components/sections/Services.jsx"
import ContactForm from "./components/sections/ContactForm.jsx"
import Footer from "./components/layout/Footer.jsx"
import AdminLogin from "./pages/AdminLogin.jsx"
import AdminDashboard from "./pages/AdminDashboard.jsx"
import NotFound from "./pages/NotFound.jsx"

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <MyStory />
      <PathToMastery />
      <SelectedWorks />
      <Services />
      <ContactForm />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
