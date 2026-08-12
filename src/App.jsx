import Navbar from "./components/layout/Navbar.jsx"
import Hero from "./components/sections/Hero.jsx"
import MyStory from "./components/sections/MyStory.jsx"
import PathToMastery from "./components/sections/PathToMastery.jsx"
import SelectedWorks from "./components/sections/SelectedWorks.jsx"
import Services from "./components/sections/Services.jsx"
import ContactForm from "./components/sections/ContactForm.jsx"
import Footer from "./components/layout/Footer.jsx"

function App() {
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

export default App
