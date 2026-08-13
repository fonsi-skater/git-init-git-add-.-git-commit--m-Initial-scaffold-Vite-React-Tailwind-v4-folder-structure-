import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { Search } from "lucide-react"

function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const commands = [
    { label: "Go to My Story", action: () => scrollToSection("my-story") },
    { label: "Go to Path to Mastery", action: () => scrollToSection("path-to-mastery") },
    { label: "Go to Selected Works", action: () => scrollToSection("selected-works") },
    { label: "Go to GitHub Activity", action: () => scrollToSection("github-activity") },
    { label: "Go to Services", action: () => scrollToSection("services") },
    { label: "Go to Contact", action: () => scrollToSection("contact") },
    { label: "Download Resume", action: () => window.open("/resume.pdf", "_blank") },
    { label: "Open GitHub Profile", action: () => window.open("https://github.com/fonsi-skater", "_blank") },
    { label: "Back to Top", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
  ]

  function scrollToSection(id) {
    if (window.location.pathname !== "/") {
      navigate("/")
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const filtered = commands.filter((c) =>


@'
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar.jsx"
import Hero from "./components/sections/Hero.jsx"
import MyStory from "./components/sections/MyStory.jsx"
import PathToMastery from "./components/sections/PathToMastery.jsx"
import SelectedWorks from "./components/sections/SelectedWorks.jsx"
import GithubActivity from "./components/sections/GithubActivity.jsx"
import Services from "./components/sections/Services.jsx"
import ContactForm from "./components/sections/ContactForm.jsx"
import Footer from "./components/layout/Footer.jsx"
import AdminLogin from "./pages/AdminLogin.jsx"
import AdminDashboard from "./pages/AdminDashboard.jsx"
import ProjectDetail from "./pages/ProjectDetail.jsx"
import NotFound from "./pages/NotFound.jsx"
import CommandPalette from "./components/ui/CommandPalette.jsx"

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <MyStory />
      <PathToMastery />
      <SelectedWorks />
      <GithubActivity />
      <Services />
      <ContactForm />
      <Footer />
    </>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:name" element={<ProjectDetail />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CommandPalette />
    </>
  )
}

export default App
