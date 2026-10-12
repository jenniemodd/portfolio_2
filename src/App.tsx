
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Packages from "./components/Packages"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import IntroBanner from "./components/IntroBanner"

function App() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />
        <IntroBanner />
        <About />
        <Services />
        <Projects />
        <Packages />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
