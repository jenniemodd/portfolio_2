import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Projects from "./components/Projects"

function App() {
  return (
    <>
      <Navigation />

      <main>
      <Hero />
      <About />
      <Services />
      <Projects />
        <h1>Jennie Modd</h1>
      </main>
    </>
  )
}

export default App